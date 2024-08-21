import { Box, Typography } from "@mui/material";

const OurFacility = ({ facility, facilityImg }) => {
  return (
    <Box
      py={{ md: 10, xs: 5 }}
      px={{ md: 10, xs: 5 }}
      // sx={{
      //   background: `url(${gradient}) no-repeat`,
      //   backgroundSize: "100% 100%",
      // }}
      minHeight="31.25rem"
    >
      <Box display="flex" flexWrap={"wrap"}>
        <Box
          width={{ md: "50%", xs: "100%" }}
          height={{ md: "37.5rem", xs: "25rem" }}
        >
          <img
            src={facilityImg}
            width="100%"
            height="100%"
            alt="service"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          width={{ md: "50%", xs: "100%" }}
          display="flex"
          flexDirection="column"
          pt={4}
          // justifyContent="center"
        >
          <Typography
            fontSize={{ md: "3.125rem", xs: "2.5rem" }}
            fontWeight="bold"
            mb={2}
            textTransform="uppercase"
          >
            {facility.mainHeader}
          </Typography>
          <Typography fontSize={"2rem"} textTransform="uppercase" mb={4}>
            {facility.subHeader}
          </Typography>
          <Typography variant="h6" color="#777" lineHeight={2}>
            {facility.content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurFacility;
