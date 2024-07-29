import { Typography, Box } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import homeBanner from "assets/images/banners/home.jpeg";

import ambulance from "assets/images/ambulance.svg";
import pediatricas from "assets/images/pediatrics.svg";
import { BookAppointment } from "components";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={homeBanner}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography fontSize="3.125rem">LIVE A LIFE</Typography>
        <Typography fontSize="4.375rem" fontWeight="bold">
          WITHOUT GLASSES
        </Typography>
        <Box>
          <Typography component="span" fontSize="3.125rem" mr={2}>
            USING
          </Typography>
          <Typography component="span" fontSize="4.375rem" fontWeight="bold">
            SIMPLE PRO
          </Typography>
        </Box>

        <Typography fontSize="3.125rem">TECHNOLOGY</Typography>
      </BannerContainer>
      <Box
        bgcolor="secondary.main"
        py={2}
        color="common.white"
        px={10}
        display="flex"
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
        >
          24 hrs Emergency
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
        <Typography variant="h5" flexGrow={1} pl={6} position="relative">
          <img
            src={pediatricas}
            width="25px"
            alt="pediatricas"
            style={{ position: "absolute", left: 0, top: "-3px" }}
          />
          24 hrs ICU
        </Typography>
      </Box>
    </>
  );
};

export default Banner;
