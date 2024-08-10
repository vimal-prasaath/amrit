import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const BannerContainer = styled(Box)(({ image, largeBanner }) => ({
  background: `url(${image}) no-repeat`,
  backgroundPositionX: "right",
  backgroundSize: "cover",
  minHeight: !largeBanner ? "20.125rem" : "37.5rem",
  boxShadow: "0 -2px 15px 0 rgba(153, 153, 153, 0.2)",
}));
