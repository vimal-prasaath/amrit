import { Typography, Box } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import homeBanner from "assets/images/banners/home.jpeg";

import ambulance from "assets/images/ambulance.svg";
import icu from "assets/images/icu.svg";
import { BookAppointment } from "components";
import Slider from "react-slick";

import img1 from "assets/images/banners/home-carousel/1.png";
import img2 from "assets/images/banners/home-carousel/2.png";
// import img3 from "assets/images/banners/home-carousel/3.png";

const Banner = () => {
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
              image={img1}
              px={10}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography fontSize="3.125rem">
                Your Health, Our Priority
              </Typography>
              <Typography fontSize="4.375rem" fontWeight="bold" mb={10}>
                Multi-Speciality Care
              </Typography>
            </BannerContainer>
          </Box>

          <Box>
            <BannerContainer
              image={img2}
              px={10}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography fontSize="4.375rem" fontWeight="bold">
                From Bump to Baby
              </Typography>
              <Typography fontSize="3.125rem" mb={10}>
                Exceptional Gynaecology & Maternal Care
              </Typography>
            </BannerContainer>
          </Box>

          <Box>
            <BannerContainer
              image={homeBanner}
              px={10}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography fontSize="3.125rem">
                See Clearly Without Specs
              </Typography>
              <Typography fontSize="4.375rem" fontWeight="bold" mb={10}>
                Expert Eye Care
              </Typography>
            </BannerContainer>
          </Box>
        </Slider>
      </Box>
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
    </>
  );
};

export default Banner;
