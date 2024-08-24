import { Box, Typography, Button, Link } from "@mui/material";

import { DoctorCard } from "components";
import { data } from "./data";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";

const OurDoctors = ({ detailView }) => {
  const { departId, id } = useParams();

  console.log(departId, id);

  const isGeneral = departId === "general";

  const defaultProps = { bgcolor: "#f6f6f6", py: 4, px: { md: 10, xs: 5 } };

  const containerProps = detailView ? {} : defaultProps;

  const idToMap = isGeneral ? id : departId;

  const docs = detailView
    ? data.filter((item) => item.id === idToMap)
    : data.slice(0, 8);

  return (
    <Box {...containerProps}>
      {!detailView && (
        <Box textAlign={"center"}>
          <Typography textAlign="center" variant="subHeader">
            Our Team of Dedicated Doctors
          </Typography>
        </Box>
      )}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={!detailView ? "start" : "center"}
        px={{ md: detailView ? 0 : 6, xs: 0 }}
        py={detailView ? 0 : 5}
      >
        {(docs?.length ? docs : data).map((item, index) => (
          <Box key={index} px={1.5} mb={3}>
            <DoctorCard data={item} detailView={detailView} />
          </Box>
        ))}
      </Box>
      {!detailView && (
        <Box textAlign="center">
          <Link
            to="/our-doctor"
            component={RouterLink}
            sx={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2.5, py: 1.25, minWidth: "12.5rem" }}
            >
              View All Team
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default OurDoctors;
