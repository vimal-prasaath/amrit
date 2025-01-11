import { Typography, Box, Button } from "@mui/material";
import ambulance from "assets/images/ambulance.svg";
import icu from "assets/images/icu.svg";
import { BookAppointment, BookAppointmentModel } from "components";
import { useState } from "react";

const BookAppointmentStrip = ({ mt }) => {
  const [openModel, setOpenModel] = useState(false);

  const openPopup = () => setOpenModel(true);
  const closePopup = () => setOpenModel(false);

  return (
    <>
      <Box
        display={{ md: "none", xs: "flex" }}
        justifyContent={"space-between"}
        bgcolor="secondary.main"
        color="common.white"
        alignItems={"center"}
        p={2}
        mt={mt || 0}
      >
        <Typography
          variant="body2"
          // flexGrow={1}
          textAlign="right"
          // pr={1}
          position="relative"
          display={"flex"}
          alignItems={"center"}
          width={"50%"}
          justifyContent={"end"}
          // textAlign="right"
        >
          24 hrs Emergency
          <img
            src={ambulance}
            width="30px"
            alt="ambulance"
            style={{ paddingLeft: "0.5rem" }}
          />
        </Typography>
        <Button
          variant="contained"
          size="medium"
          sx={{ mx: 2, minWidth: "12rem" }}
          onClick={openPopup}
        >
          Book Appoinment
        </Button>
        <Typography
          variant="body2"
          // flexGrow={1}
          pl={1}
          position="relative"
          display={"flex"}
          alignItems={"center"}
          width={"40%"}
        >
          <img
            src={icu}
            width="30px"
            alt="pediatricas"
            style={{ paddingRight: "0.5rem", left: 0 }}
          />
          24 hrs ICU
        </Typography>
      </Box>
      <Box
        bgcolor="secondary.main"
        py={2}
        color="common.white"
        px={{ md: 10, xs: 5 }}
        display={{ md: "flex", xs: "none" }}
        position="relative"
        sx={{
          "&::before": {
            content: '" "',
            position: "absolute",
            border: "2rem solid white",
            borderTopColor: "transparent",
            borderRightColor: "transparent",
            top: 0,
            left: 0,
          },
          "&::after": {
            content: '" "',
            position: "absolute",
            border: "2rem solid white",
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            top: 0,
            right: 0,
          },
        }}
      >
        <Typography
          variant="h5"
          flexGrow={1}
          textAlign="end"
          pr={6}
          position="relative"
          width={"50%"}
        >
          24 hrs Emergency Services
          <img
            src={ambulance}
            width="30"
            alt="ambulance"
            style={{ position: "absolute", right: 0 }}
          />
        </Typography>
        <Box flexGrow={2} position="relative" minWidth={"50rem"}>
          <Box position="absolute" width={"100%"} bottom={"-10rem"}>
            <BookAppointment />
          </Box>
        </Box>
        <Typography
          variant="h5"
          flexGrow={1}
          pl={6}
          position="relative"
          width={"50%"}
        >
          <img
            src={icu}
            width="30px"
            alt="pediatricas"
            style={{ position: "absolute", left: 0 }}
          />
          24 hrs ICU
        </Typography>
      </Box>
      {openModel && <BookAppointmentModel onClose={closePopup} />}
    </>
  );
};

export default BookAppointmentStrip;
