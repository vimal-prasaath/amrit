import { Box, Grid, Typography } from "@mui/material";

const AboutItem = ({ text, subtext }) => (
  <Box textAlign="center">
    <Typography fontSize={"5rem"} mb={0}>
      {text}
    </Typography>
    <Typography fontSize={"2rem"}>{subtext}</Typography>
  </Box>
);

const About = ({ about, aboutImg }) => {
  return (
    <Box
      px={10}
      sx={{ background: `url(${aboutImg}) no-repeat`, backgroundSize: "cover" }}
      color="common.white"
    >
      <Grid container spacing={2} py={4}>
        {about.map((item, index) => (
          <Grid
            item
            xs={6}
            md={4}
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
