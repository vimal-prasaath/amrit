import { Box, Grid, Typography } from "@mui/material";
import about from "assets/images/background/about.png";

const AboutItem = ({ text, subtext }) => (
  <Box textAlign="center">
    <Typography fontSize={"5rem"} mb={0}>
      {text}
    </Typography>
    <Typography fontSize={"2rem"}>{subtext}</Typography>
  </Box>
);

const About = () => {
  return (
    <Box
      px={10}
      sx={{ background: `url(${about}) no-repeat`, backgroundSize: "cover" }}
      color="common.white"
    >
      <Grid container spacing={2} py={4}>
        <Grid item xs={6} md={4} lg={3} borderRight={1}>
          <AboutItem text={"40+"} subtext="Years of Experience" />
        </Grid>
        <Grid item xs={6} md={4} lg={3} borderRight={1}>
          <AboutItem text={"2Lac+"} subtext="Surgeries" />
        </Grid>
        <Grid item xs={6} md={4} lg={3} borderRight={1}>
          <AboutItem text={"1.5K"} subtext="Happy Patients" />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <AboutItem text={"30K"} subtext="Optical Services" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
