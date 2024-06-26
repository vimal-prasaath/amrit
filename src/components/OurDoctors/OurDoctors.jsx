import { Box, Typography, Button } from "@mui/material";

import { DoctorCard } from "components";

const OurDoctors = () => {
  return (
    <Box bgcolor="#F6F6F6" py={4} px={10}>
      <Typography textAlign="center" fontSize={"3.125rem"} fontWeight="bold">
        Our Team of Dedicated Doctors
      </Typography>
      <Box display="flex" flexWrap="wrap" px={6} py={5}>
        <Box px={1.5} mb={2}>
          <DoctorCard />
        </Box>

        <Box px={1.5} mb={2}>
          <DoctorCard />
        </Box>

        <Box px={1.5} mb={2}>
          <DoctorCard />
        </Box>

        <Box px={1.5} mb={2}>
          <DoctorCard />
        </Box>
      </Box>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2.5, py: 1.25, minWidth: "12.5rem" }}
        >
          View All Team
        </Button>
      </Box>
    </Box>
  );
};

export default OurDoctors;
