import { Box, Grid, Typography } from "@mui/material";

const AboutItem = ({ text, subtext }) => (
  <Box textAlign="center">
    <Typography fontSize={{ md: "5rem", xs: "1.5rem" }} mb={0}>
      {text}
    </Typography>
    <Typography fontSize={{ md: "2rem", xs: "0.75rem" }}>{subtext}</Typography>
  </Box>
);

const About = ({ about, aboutImg }) => {
  return (
    <Box
      px={{ md: 10, xs: 2 }}
      sx={{ background: `url(${aboutImg}) no-repeat`, backgroundSize: "cover" }}
      color="common.white"
    >
      <Grid container spacing={2} py={4}>
        {about.map((item, index) => (
          <Grid
            item
            xs={3}
            md={3}
            lg={3}
            borderRight={index !== about.length - 1 ? 1 : 0}
            key={index + "about"}
          >
            <AboutItem text={item.text} subtext={item.subText} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
