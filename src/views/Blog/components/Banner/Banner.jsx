import { Typography, Box } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import blog from "assets/images/banners/blog.png";
import { BookAppointmentStrip } from "components";

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
      <Box mb={{ md: "10rem", xs: "2.5rem" }}>
        <BookAppointmentStrip />
      </Box>
    </>
  );
};

export default Banner;
