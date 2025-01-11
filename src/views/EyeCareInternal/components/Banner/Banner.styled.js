import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const BannerContainer = styled(Box)(
  ({ image, largeBanner, isDoctorView }) => ({
    background: `url(${image}) no-repeat`,
    backgroundPositionX: "right",
    backgroundSize: "cover",
    minHeight: !largeBanner ? "20.125rem" : "30rem",
    boxShadow: "0 -2px 15px 0 rgba(153, 153, 153, 0.2)",
    "@media screen and (max-width: 767px)": {
      minHeight: "12rem",
      backgroundSize: !isDoctorView ? "contain" : "cover",
    },
  })
);
