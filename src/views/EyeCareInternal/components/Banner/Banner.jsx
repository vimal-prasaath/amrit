import { Typography } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import eyecare from "assets/images/banners/internal.png";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={eyecare}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography fontSize="3.125rem" fontWeight={600}>
          GYNECOLOGY
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
