import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Typography } from "@mui/material";
import { ToggleBtn } from "./ToggleBtn.styled";
import { useParams, useNavigate } from "react-router";

const VerticalBtnGroup = ({ links, departId }) => {
  const { id } = useParams();
  const [view, setView] = useState(id);
  const navigate = useNavigate();

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
      navigate(`/department-internal/${departId}/${nextView}`);
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
        {links.map((item) => (
          <ToggleBtn key={item.id} value={item.id}>
            {item.label}
          </ToggleBtn>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default VerticalBtnGroup;
