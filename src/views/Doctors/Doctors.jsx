import { Box, Typography, Link } from "@mui/material";
import { Banner } from "views/EyeCareInternal/components";
import {
  Testimonial,
  BookAppointmentModel,
  VerticalBtnGroup,
  OurDoctors,
  Blog,
} from "components";
import department from "assets/images/banners/internal.png";
import { list } from "views/EyeCareDetails/internal-data/doctors";

import internalReach from "assets/images/background/internal-reach.png";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { BookAppointmentStrip } from "components";

const Doctors = () => {
  const [openModel, setOpenModel] = useState(false);

  const openPopup = () => setOpenModel(true);
  const closePopup = () => setOpenModel(false);

  const [selectedDoc, setSelectedDoc] = useState("");

  return (
    <Box>
      <Box position={"relative"}>
        <Banner bannerImg={department} isDoctorView={true} />
        <Box mb={{ md: "10rem", xs: "2.5rem" }}>
          <BookAppointmentStrip />
        </Box>
        <Typography
          fontSize={{ md: "3.125rem", xs: "2.25rem" }}
          fontWeight={600}
          position="absolute"
          sx={{
            top: "50%",
            transform: "translateY(-50%)",
            left: { md: "5rem", xs: "1rem" },
          }}
        >
          {"Our Doctors"}
        </Typography>
      </Box>

      <Box
        px={{ md: 10, xs: 5 }}
        py={{ md: 5, xs: 2 }}
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
      >
        <Box order={{ xs: 2, md: 1 }} display={"flex"} flexDirection={"column"}>
          <VerticalBtnGroup
            links={[{ id: "all", label: "All Doctors" }, ...list]}
            departId={"general"}
            listheader={"List of Doctors"}
            isDoctorView
            callback={setSelectedDoc}
          />
          <Box
            order={{ xs: -1, md: 2 }}
            py={4}
            maxWidth={{ xs: "100%", md: "24.5rem" }}
            minWidth={{ xs: "100%", md: "24.5rem" }}
            position={"relative"}
          >
            <img
              src={internalReach}
              alt="internalReach"
              width="100%"
              onClick={openPopup}
              style={{ cursor: "pointer" }}
            />
            <Link
              to="tel:+919600711818"
              alignItems="center"
              component={RouterLink}
              sx={{
                textDecoration: "none",
                width: "100%",
                height: "30px",
                display: "block",
                position: "absolute",
                bottom: "33%",
                zIndex: 1,
              }}
              color={"common.black"}
            ></Link>
          </Box>
        </Box>
        <Box pl={{ md: 5, xs: 0 }} flexGrow={1} order={{ xs: 1, md: 2 }}>
          <OurDoctors detailView filterKey={selectedDoc} />
        </Box>
        {openModel && <BookAppointmentModel onClose={closePopup} />}
      </Box>
      <Testimonial />
      <Blog />
    </Box>
  );
};

export default Doctors;
