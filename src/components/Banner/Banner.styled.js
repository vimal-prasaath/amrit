import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const BannerContainer = styled(Box)(({ image, mobile }) => ({
  background: `url(${image}) no-repeat`,
  backgroundPositionX: "right",
  backgroundSize: "cover",
  minHeight: "37.5rem",
  boxShadow: "0 -2px 15px 0 rgba(153, 153, 153, 0.2)",
  "@media screen and (max-width: 767px)": {
    minHeight: "25rem",
    background: `url(${mobile}) no-repeat`,
    backgroundSize: "cover",
    backgroundPositionX: "left",
    backgroundPositionY: "center",

    p: {
      display: "none",
    },
  },
}));
