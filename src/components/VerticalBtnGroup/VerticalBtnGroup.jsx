import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Typography } from "@mui/material";
import { ToggleBtn } from "./ToggleBtn.styled";
import { useParams, useNavigate } from "react-router";
import { list } from "views/EyeCareDetails/internal-data/otherInternal";

const otherInternalsIds = list.map((item) => item.id);

const VerticalBtnGroup = ({
  links,
  departId,
  listheader,
  isDoctorView,
  callback,
}) => {
  const { id } = useParams();
  const [view, setView] = useState(id);
  const navigate = useNavigate();

  const getSubLink = (id) => links.find((item) => item.id === id).subLink;

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
      if (!isDoctorView) {
        const url =
          departId === "general" && !otherInternalsIds.includes(nextView)
            ? `/department-internal/${nextView}/${getSubLink(nextView)}`
            : `/department-internal/${departId}/${nextView}`;
        navigate(url);
      } else {
        callback && callback(nextView);
      }
    }
  };

  return (
    <Box
      maxWidth={{ md: "24.5rem", xs: "100%" }}
      minWidth={{ md: "24.5rem", xs: "100%" }}
      bgcolor="#f4f4f4"
      px={3}
      my={{ md: 0, xs: 4 }}
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
        {listheader}
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
