import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const JoinUsContainer = styled(Box)(({ image }) => ({
  background: `url(${image}) no-repeat`,
  backgroundPositionX: "right",
  backgroundSize: "100% 100%",
  height: "32rem",
  boxShadow: "0 -2px 15px 0 rgba(153, 153, 153, 0.2)",
}));
