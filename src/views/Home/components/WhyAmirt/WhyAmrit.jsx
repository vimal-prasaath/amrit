import { Box, Typography, Grid } from "@mui/material";
import { WhyUs } from "components";
import whyAmrit from "assets/images/background/why.png";
import experience from "assets/images/experience.svg";
import happyface from "assets/images/happyface.svg";
import doc from "assets/images/doctors.svg";
import services from "assets/images/services.svg";
import award from "assets/images/award.svg";
const WhyAmrit = () => {
  return (
    <Box
      py={4}
      px={{ md: 10, xs: 5 }}
      sx={{
        background: `url(${whyAmrit}) no-repeat`,
        backgroundSize: "cover",
      }}
      minHeight="31.25rem"
      color="common.white"
    >
      <Typography
        textAlign="center"
        fontSize={"3.125rem"}
        fontWeight="bold"
        mb={4}
      >
        Why AMRIT
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        width={{ md: "75%", xs: "100%" }}
        mx="auto"
        mb={3}
      >
        At Amrit Hospital, we take pride in our commitment to excellence and
        compassion. Here are some reasons why we stand out:
      </Typography>
      <Grid container spacing={2} pt={8}>
        {/* <Grid item xs={6} md={4} lg={0.25}></Grid> */}

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={2.4}
          borderRight={{ md: 1, xs: 0 }}
        >
          <WhyUs icon={experience} text={"152 +"} subText={"Beds"} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={2.4}
          borderRight={{ md: 1, xs: 0 }}
        >
          <WhyUs
            icon={award}
            text={"276,505+"}
            subText={"Surgeries Performed"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={2.4}
          borderRight={{ md: 1, xs: 0 }}
        >
          <WhyUs icon={doc} text={"92+ "} subText={"Specialized Doctors"} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={2.4}
          borderRight={{ md: 1, xs: 0 }}
        >
          <WhyUs icon={services} text={"35+"} subText={"Years of Experience"} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <WhyUs icon={happyface} text={"40 Lac+"} subText={"Happy Patients"} />
        </Grid>
        {/* <Grid item xs={6} md={4} lg={0.25} /> */}
      </Grid>
    </Box>
  );
};

export default WhyAmrit;
