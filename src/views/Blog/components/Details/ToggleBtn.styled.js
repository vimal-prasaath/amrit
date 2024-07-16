import { ToggleButton } from "@mui/material";
import styled from "@emotion/styled";

export const ToggleBtn = styled(ToggleButton)(({ theme }) => ({
  background: "#f4f4f4",
  borderRadius: "0.5rem !important",
  border: "none",
  marginBottom: "1rem",
  fontWeight: "bold",
  color: theme.palette.text.primary,
  transition: "all 0.2s ease",
  marginRight: "1rem",
  minWidth: "10rem",
  "&.Mui-selected,&.Mui-selected:hover,&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    transition: "all 0.2s ease",
  },
}));
