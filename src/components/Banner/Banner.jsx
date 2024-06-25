import { Typography, Box } from "@mui/material";
import { BannerContainer } from "./Banner.styled";
import homeBanner from "assets/images/banners/home.jpeg";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={homeBanner}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography fontSize="3.125rem">LIVE A LIFE</Typography>
        <Typography fontSize="4.375rem" fontWeight="bold">
          WITHOUT GLASSES
        </Typography>
        <Box>
          <Typography component="span" fontSize="3.125rem" mr={2}>
            USING
          </Typography>
          <Typography component="span" fontSize="4.375rem" fontWeight="bold">
            SIMPLE PRO
          </Typography>
        </Box>

        <Typography fontSize="3.125rem">TECHNOLOGY</Typography>
      </BannerContainer>
      <Box
        bgcolor="secondary.main"
        py={2}
        color="common.white"
        px={10}
        display="flex"
        position="relative"
        sx={{
          "&::before": {
            content: '" "',
            position: "absolute",
            border: "2rem solid white",
            borderTopColor: "transparent",
            borderRightColor: "transparent",
            top: 0,
            left: 0,
          },
          "&::after": {
            content: '" "',
            position: "absolute",
            border: "2rem solid white",
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            top: 0,
            right: 0,
          },
        }}
      >
        <Typography variant="h5" flexGrow={1} textAlign="end">
          24 hrs ICU Ambulance
        </Typography>
        <Box flexGrow={2}></Box>
        <Typography variant="h5" flexGrow={1}>
          24 hrs ICU Pediatrics
        </Typography>
      </Box>
    </>
  );
};

export default Banner;
