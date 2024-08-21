import { Typography, Box } from "@mui/material";
import { BannerContainer } from "./Banner.styled";

const Banner = ({ banner, bannerImg, bannerSize }) => {
  return (
    <>
      <BannerContainer
        image={bannerImg}
        px={{ md: 10, xs: 5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box mb={{ md: 8, xs: 3 }}>
          {banner.map((item, index) => (
            <Typography
              key={index + "banner"}
              // fontSize={bannerSize[index] || "4.375rem"}
              fontSize={{
                md: bannerSize[index] || "4.375rem",
                xs:
                  bannerSize[index]?.split("rem")[0] / 1.75 + "rem" ||
                  "2.375rem",
              }}
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
