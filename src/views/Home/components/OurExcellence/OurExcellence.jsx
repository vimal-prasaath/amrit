import { Box, Typography, Grid } from "@mui/material";
import { ServiceCard } from "components";

const OurExcellence = () => {
  return (
    <Box py={4} px={10}>
      <Typography
        textAlign="center"
        fontSize={"3.125rem"}
        fontWeight="bold"
        mb={4}
      >
        Our Centers of Excellence
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text={"Ophthalmology"} />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text={"Pediatrics (Pediatric surgery)"} />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text={"Gynaecology"} />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Internal Medicine" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Diabetology" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Orthopedics" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Gen. Surgery & Laparoscopic" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="ENT" />
        </Grid>

        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text={"Cardiology"} />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text={"Nephrology"} />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text={"Neurology"} />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Dermatology" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Physio" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Gastroenterology" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Radiology" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <ServiceCard text="Critical care" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurExcellence;
