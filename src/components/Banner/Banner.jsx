import { Typography, Box, Button } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import homeBanner from "assets/images/banners/home.jpeg";
import { useState } from "react";
import ambulance from "assets/images/ambulance.svg";
import icu from "assets/images/icu.svg";
import { BookAppointment, BookAppointmentModel } from "components";
import Slider from "react-slick";

import img1 from "assets/images/banners/home-carousel/1.png";
import img2 from "assets/images/banners/home-carousel/2.png";
// import img3 from "assets/images/banners/home-carousel/3.png";

import m1 from "assets/images/banners/home-carousel/m1.png";
import m2 from "assets/images/banners/home-carousel/m2.png";
import m3 from "assets/images/banners/home-carousel/m3.png";

const Banner = () => {
  const [openModel, setOpenModel] = useState(false);

  const openPopup = () => setOpenModel(true);
  const closePopup = () => setOpenModel(false);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // fade: true,
  };

  return (
    <>
      <Box className="slider-container">
        <Slider {...settings}>
          <Box>
            <BannerContainer
              image={homeBanner}
              px={{ md: 10, xs: 5 }}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              mobile={m3}
            >
              <Typography fontSize={{ md: "3.125rem", xs: "2rem" }} mt={2}>
                See Clearly Without Specs
              </Typography>
              <Typography
                fontSize={{ md: "4.375rem", xs: "2.375rem" }}
                fontWeight="bold"
                mb={{ md: 10, xs: 5 }}
              >
                Expert Eye Care
              </Typography>
            </BannerContainer>
          </Box>
          <Box>
            <BannerContainer
              image={img1}
              px={{ md: 10, xs: 5 }}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              mobile={m1}
            >
              <Typography fontSize={{ md: "3.125rem", xs: "2rem" }} mt={2}>
                Your Health, Our Priority
              </Typography>
              <Typography
                fontSize={{ md: "4.375rem", xs: "2.375rem" }}
                fontWeight="bold"
                mb={{ md: 10, xs: 5 }}
              >
                Multi-Speciality Care
              </Typography>
            </BannerContainer>
          </Box>

          <Box>
            <BannerContainer
              image={img2}
              px={{ md: 10, xs: 5 }}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              mobile={m2}
            >
              <Typography
                fontSize={{ md: "4.375rem", xs: "2.375rem" }}
                fontWeight="bold"
                mt={2}
              >
                From Bump to Baby
              </Typography>
              <Typography
                fontSize={{ md: "3.125rem", xs: "2rem" }}
                mb={{ md: 10, xs: 5 }}
              >
                Exceptional Gynaecology & Maternal Care
              </Typography>
            </BannerContainer>
          </Box>
        </Slider>
      </Box>
      <Box
        display={{ md: "none", xs: "flex" }}
        justifyContent={"space-between"}
        bgcolor="secondary.main"
        color="common.white"
        alignItems={"center"}
        p={2}
        mt={-1}
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

export default Banner;
