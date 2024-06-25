import { Box, Typography } from "@mui/material";

const WhyUs = ({ icon, text, subText }) => {
  return (
    <Box textAlign="center">
      <img src={icon} alt="experiece" />
      <Typography fontSize="2rem" py={2}>
        {text}
      </Typography>
      <Typography variant="body2">{subText}</Typography>
    </Box>
  );
};

export default WhyUs;
