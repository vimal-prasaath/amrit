import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const Slope = styled(Box)(() => ({
  position: "absolute",
  width: "98%",
  height: "100px",
  background: "white",
  top: "-2rem",
  right: 0,
  transform: "skewY(-10deg)",
  zIndex: 0,
}));
