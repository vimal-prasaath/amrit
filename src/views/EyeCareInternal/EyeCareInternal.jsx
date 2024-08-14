import { Box, Typography } from "@mui/material";
import { Banner, Details } from "./components";
import { useParams } from "react-router";
import { departmentinternal } from "views/EyeCareDetails/internal-data";
import { Testimonial } from "components";

const EyeCareInternal = ({ doctorView }) => {
  const { id, departId } = useParams();
  const { internalData, list, listheader } = departmentinternal[departId] || {};
  const pageData = internalData?.find((item) => item.id === id) || {};

  const [label1, label2] = pageData?.label?.split("||").reverse() || [];

  return (
    <Box>
      <Box position={"relative"}>
        <Banner text={pageData.label} bannerImg={pageData?.banner} />

        {Boolean(pageData?.label) && (
          <Typography
            fontSize="3.125rem"
            fontWeight={600}
            position="absolute"
            // color={"white"}
            sx={{
              top: "50%",
              transform: "translateY(-50%)",
              left: "5rem",
              // filter: "drop-shadow(2px 4px 6px black)",
            }}
          >
            <Typography
              component={"span"}
              fontSize={"2.50rem"}
              fontWeight={600}
              display={"block"}
            >
              {label2}
            </Typography>
            {label1}
          </Typography>
        )}
      </Box>
      <Details
        data={pageData.data}
        doctorView={doctorView}
        links={list}
        departId={departId}
        img={pageData.img}
        listheader={listheader}
      />
      <Testimonial />
    </Box>
  );
};

export default EyeCareInternal;
