import { Typography } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import blog from "assets/images/banners/blog.png";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={blog}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography fontSize="3.125rem" fontWeight={600}>
          Blog
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
