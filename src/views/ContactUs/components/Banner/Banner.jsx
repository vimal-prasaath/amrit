import { Typography } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import contact from "assets/images/banners/contactus.png";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={contact}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography fontSize="3.125rem" fontWeight={600}>
          CONTACT US
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
