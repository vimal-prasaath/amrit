import { Typography } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import department from "assets/images/banners/internal.png";

const Banner = ({ text, bannerImg }) => {
  return (
    <>
      <BannerContainer
        image={bannerImg || department}
        largeBanner={Boolean(bannerImg)}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        sx={{ filter: "grayscale(1)" }}
      >
        <Typography display={"none"} fontSize="3.125rem" fontWeight={600}>
          {text}
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
