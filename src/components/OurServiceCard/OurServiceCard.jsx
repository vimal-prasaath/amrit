import { Box, Typography, Button } from "@mui/material";

const OurServiceCard = ({ header, description, icon }) => {
  return (
    <Box
      boxShadow={"0 0 10px 0 rgba(153, 153, 153, 0.2)"}
      p={4}
      mt={6}
      height={"calc(100% - 3rem)"}
      borderRadius={"1rem"}
      bgcolor={"common.white"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        width="6.25rem"
        height="6.25rem"
        borderRadius="0.5rem"
        position="relative"
        top="-5rem"
        bgcolor="common.white"
        p={1.5}
        mx="auto"
        boxShadow={"0 0 12px 0 rgba(153, 153, 153, 0.2)"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img src={icon} alt="icon" width={"100%"} />
      </Box>
      <Typography variant="subtitle1" fontWeight="bold" mt={-6}>
        {header}
      </Typography>
      <Typography variant="body2" color="#999" py={3.5}>
        {description}
      </Typography>
      <Box mt={"auto"}>
        <Button variant="outlined">Book Now</Button>
      </Box>
    </Box>
  );
};

export default OurServiceCard;
