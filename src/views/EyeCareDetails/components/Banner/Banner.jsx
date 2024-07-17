import { Typography } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import eyecare from "assets/images/banners/eyecare.png";

const Banner = ({ banner }) => {
  return (
    <>
      <BannerContainer
        image={eyecare}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        {banner.map((item, index) => (
          <Typography
            key={index + "banner"}
            fontSize="4.375rem"
            fontWeight="bold"
          >
            {item}
          </Typography>
        ))}
        {/* <Typography fontSize="3.125rem">BEST EYE CARE</Typography>
        <Typography fontSize="4.375rem" fontWeight="bold">
          HOSPITAL IN CHENNAI
        </Typography>
        <Typography component="span" fontSize="3.125rem" mr={2}>
          Freedom from Glasses in 9min.
        </Typography>
        <Typography component="span" fontSize="4.375rem" fontWeight="bold">
          Life Changing Procedure
        </Typography> */}
      </BannerContainer>
    </>
  );
};

export default Banner;
