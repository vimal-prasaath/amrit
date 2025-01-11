import { Typography, Box } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import homeBanner from "assets/images/banners/home.jpeg";
import { BookAppointmentStrip } from "components";
import Slider from "react-slick";

import img1 from "assets/images/banners/home-carousel/1.png";
import img2 from "assets/images/banners/home-carousel/2.png";
// import img3 from "assets/images/banners/home-carousel/3.png";

import m1 from "assets/images/banners/home-carousel/m1.png";
import m2 from "assets/images/banners/home-carousel/m2.png";
import m3 from "assets/images/banners/home-carousel/m3.png";

const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10000,
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
      <BookAppointmentStrip mt={-1} />
    </>
  );
};

export default Banner;
