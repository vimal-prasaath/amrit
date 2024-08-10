import { Typography } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import department from "assets/images/banners/internal.png";

const Banner = ({ text, bannerImg }) => {
  console.log(Boolean(bannerImg));
  return (
    <>
      <BannerContainer
        image={bannerImg || department}
        largeBanner={Boolean(bannerImg)}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography fontSize="3.125rem" fontWeight={600}>
          {text}
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
