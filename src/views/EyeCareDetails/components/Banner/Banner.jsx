import { Typography, Box } from "@mui/material";
import { BannerContainer } from "./Banner.styled";

const Banner = ({ banner, bannerImg, bannerSize }) => {
  return (
    <>
      <BannerContainer
        image={bannerImg}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box mb={8}>
          {banner.map((item, index) => (
            <Typography
              key={index + "banner"}
              fontSize={bannerSize[index] || "4.375rem"}
              fontWeight={bannerSize[index] !== "2.375rem" ? "bold" : "normal"}
              textTransform={
                bannerSize[index] === "2.375rem" ? "uppercase" : "unset"
              }
            >
              {item}
            </Typography>
          ))}
        </Box>
      </BannerContainer>
    </>
  );
};

export default Banner;
