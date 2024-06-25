import { Box, Typography } from "@mui/material";
import service from "assets/images/service.svg";

const ServiceCard = ({ active, text }) => {
  const bgcolor = active
    ? "linear-gradient(90deg, rgba(46,173,159,0.1) 0%, rgba(217,65,54,0.1) 100%)"
    : "#f5f5f5";
  return (
    <Box
      px={2}
      py={4}
      borderRadius="0.75rem"
      border={1}
      borderColor={"#eee"}
      sx={{
        background: bgcolor,
      }}
      display="flex"
      alignItems="center"
      mt={8}
      height="6.25rem"
    >
      <Box
        width="6.25rem"
        height="6.25rem"
        borderRadius="0.5rem"
        marginTop={-12}
        bgcolor="common.white"
        p={1.5}
        boxShadow={"0 0 12px 0 rgba(153, 153, 153, 0.2)"}
      >
        <img src={service} alt="service" />
      </Box>
      <Typography pl={3} variant="h5">
        {text}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
