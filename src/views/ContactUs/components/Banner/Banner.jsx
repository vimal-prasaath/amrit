import { Typography } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import contact from "assets/images/banners/contactus.png";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={contact}
        px={{ md: 10, xs: 5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography
          fontSize={{ md: "3.125rem", xs: "2.25rem" }}
          fontWeight={600}
        >
          CONTACT US
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
