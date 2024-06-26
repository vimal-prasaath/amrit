import { Box, Typography, Grid } from "@mui/material";

import { OurServiceCard } from "components";

import opinon from "assets/images/opinon.svg";
import checkup from "assets/images/health.svg";
import eye from "assets/images/eye.svg";

const OurServices = () => {
  return (
    <Box py={10} px={18} textAlign="center">
      <Typography fontSize={"3.125rem"} fontWeight="bold" mb={2}>
        Our Services
      </Typography>
      <Grid container spacing={4} pt={8}>
        <Grid item xs={6} md={4} lg={3}>
          <OurServiceCard
            icon={opinon}
            header={"Medical Consultation"}
            description="Receive personalized and thorough consultations from our experienced medical specialists, ensuring you get the best possible care and advice."
          />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <OurServiceCard
            icon={opinon}
            header={"Expert Medical Review"}
            description="Our expert team offers reliable second opinions, providing you with confidence and clarity in your medical decisions and treatment plans."
          />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <OurServiceCard
            icon={checkup}
            header={"Preventive Check-up"}
            description="Stay ahead of health issues with our comprehensive preventive health check-ups, designed to detect potential problems early and keep you in optimal health."
          />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <OurServiceCard
            icon={eye}
            header={"Eye Examination"}
            description="Ensure your eyes are healthy with our detailed eye check-ups, using the latest technology to diagnose and treat a wide range of vision and eye health issues"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurServices;
