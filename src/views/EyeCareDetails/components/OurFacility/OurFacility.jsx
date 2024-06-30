import { Box, Typography } from "@mui/material";

import service from "assets/images/background/eyeservice.png";

const OurFacility = () => {
  return (
    <Box
      py={10}
      px={10}
      // sx={{
      //   background: `url(${gradient}) no-repeat`,
      //   backgroundSize: "100% 100%",
      // }}
      minHeight="31.25rem"
    >
      <Box display="flex">
        <Box width="50%" height="37.5rem">
          <img
            src={service}
            width="100%"
            height="100%"
            alt="service"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          pt={4}
          // justifyContent="center"
        >
          <Typography
            fontSize={"3.125rem"}
            fontWeight="bold"
            mb={2}
            textTransform="uppercase"
          >
            Freedom from Glasses in 9min
          </Typography>
          <Typography fontSize={"2rem"} textTransform="uppercase" mb={4}>
            Life Changing Procedure (Silk Pro)
          </Typography>
          <Typography variant="h6" color="#777" lineHeight={2}>
            Seconds Discover the groundbreaking Specs Removal Silk Pro, a swift
            and painless procedure that can change your life in just 9 seconds.
            Say goodbye to glasses and enjoy the freedom of crystal-clear vision
            with this innovative treatment. Transform your daily life with the
            precision and ease of Silk Pro.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurFacility;
