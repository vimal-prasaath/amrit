import { Typography } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import department from "assets/images/banners/internal.png";

const Banner = ({ text, bannerImg, isDoctorView }) => {
  return (
    <>
      <BannerContainer
        image={bannerImg || department}
        largeBanner={Boolean(bannerImg)}
        px={{ md: 10, xs: 5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        isDoctorView={isDoctorView}
        // sx={{ filter: "grayscale(1)" }}
      >
        <Typography
          display={"none"}
          fontSize={{ md: "3.125rem", xs: "2.25rem" }}
          fontWeight={600}
        >
          {text}
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
