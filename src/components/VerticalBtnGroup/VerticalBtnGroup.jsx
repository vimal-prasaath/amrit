import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Typography } from "@mui/material";
import { ToggleBtn } from "./ToggleBtn.styled";

const VerticalBtnGroup = () => {
  const [view, setView] = useState("list");

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  return (
    <Box
      maxWidth="24.5rem"
      minWidth="24.5rem"
      bgcolor="#f4f4f4"
      px={3}
      borderRadius="1rem"
    >
      <Typography
        variant="body2"
        textTransform="uppercase"
        borderBottom={1}
        mx={-3}
        px={3}
        py={2}
        borderColor="#e8e8e8"
        fontWeight={600}
      >
        Our Eye Care specialties
      </Typography>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        fullWidth
        sx={{ pt: 2 }}
      >
        <Typography variant="body2" mb={3}>
          Specs Removal Procedures
        </Typography>
        <ToggleBtn value="list">Siilk</ToggleBtn>
        <ToggleBtn value="module">Siilk Pro</ToggleBtn>
        <ToggleBtn value="quilt">Contura Lasik</ToggleBtn>
        <ToggleBtn value="list2">Siilk</ToggleBtn>
        <ToggleBtn value="module2">Siilk Pro</ToggleBtn>
        <ToggleBtn value="quilt2">Contura Lasik</ToggleBtn>
        <ToggleBtn value="list3">Siilk</ToggleBtn>
        <ToggleBtn value="module3">Siilk Pro</ToggleBtn>
        <ToggleBtn value="quilt3">Contura Lasik</ToggleBtn>
        <ToggleBtn value="list4">Siilk</ToggleBtn>
        <ToggleBtn value="module4">Siilk Pro</ToggleBtn>
        <ToggleBtn value="quilt4">Contura Lasik</ToggleBtn>
      </ToggleButtonGroup>
    </Box>
  );
};

export default VerticalBtnGroup;
