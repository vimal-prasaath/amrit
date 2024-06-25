import { ThemeProvider } from "@mui/material/styles";
import baseTheme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Header,
  Banner,
  Footer,
  JoinUs,
  DoctorCard,
  ServiceCard,
  WhyUs,
  OurServiceCard,
} from "components";
import { Box, Typography, Button, Grid } from "@mui/material";
import whyAmrit from "assets/images/background/why.jpeg";
import experience from "assets/images/experience.svg";
import happyface from "assets/images/happyface.svg";
import doc from "assets/images/doctors.svg";
import services from "assets/images/services.svg";
import award from "assets/images/award.svg";
import gradient from "assets/images/background/gradientbg.jpeg";
import ourservice1 from "assets/images/background/ourservice.png";
import ourservice2 from "assets/images/background/ourservice2.png";
import opinon from "assets/images/opinon.svg";
import checkup from "assets/images/health.svg";
import eye from "assets/images/eye.svg";

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <CssBaseline />
    <Header />
    <Banner />
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
    <Box
      py={10}
      px={10}
      sx={{
        background: `url(${gradient}) no-repeat`,
        backgroundSize: "100% 100%",
      }}
      minHeight="31.25rem"
    >
      <Box display="flex">
        <Box width="50%" height="37.5rem">
          <img
            src={ourservice2}
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
          justifyContent="center"
        >
          <Typography
            fontSize={"3.125rem"}
            fontWeight="bold"
            mb={2}
            textTransform="uppercase"
          >
            Specs removal Silk Pro
          </Typography>
          <Typography fontSize={"2rem"} textTransform="uppercase" mb={4}>
            Experience Life Without Glasses in 9
          </Typography>
          <Typography variant="h6" color="#777" lineHeight={2}>
            Seconds Discover the groundbreaking Specs Removal Silk Pro, a swift
            and painless procedure that can change your life in just 9 seconds.
            Say goodbye to glasses and enjoy the freedom of crystal-clear vision
            with this innovative treatment. Transform your daily life with the
            precision and ease of Silk Pro.
          </Typography>
          <Box>
            <Button color="primary" variant="text">
              Learn more
            </Button>
          </Box>
        </Box>
      </Box>
      <Box display="flex">
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            fontSize={"3.125rem"}
            fontWeight="bold"
            mb={2}
            textTransform="uppercase"
          >
            Robotic Cataract Surgery
          </Typography>
          <Typography fontSize={"2rem"} textTransform="uppercase" mb={4}>
            Advanced Robotic Precision for Clearer Vision
          </Typography>
          <Typography variant="h6" color="#777" lineHeight={2}>
            Experience the future of cataract treatment with our Robotic
            Cataract Surgery. This cutting-edge procedure offers exceptional
            accuracy and safety, ensuring optimal lens replacement and faster
            recovery. Trust our expert surgeons to restore your vision with the
            most advanced technology available.
          </Typography>
          <Box>
            <Button color="primary" variant="text">
              Learn more
            </Button>
          </Box>
        </Box>
        <Box width="50%" height="37.5rem">
          <img
            src={ourservice1}
            width="100%"
            height="100%"
            alt="service"
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
    <Box
      py={4}
      px={10}
      sx={{ background: `url(${whyAmrit}) no-repeat`, backgroundSize: "cover" }}
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
      <Typography variant="h6" textAlign="center" width="75%" mx="auto">
        At Amrit Hospital, we take pride in our commitment to excellence and
        compassion. Here are some reasons why we stand out:
      </Typography>
      <Grid container spacing={2} pt={8}>
        <Grid item xs={6} md={4} lg={1}></Grid>

        <Grid item xs={6} md={4} lg={2} borderRight={1}>
          <WhyUs icon={experience} text={"152 +"} subText={"Beds"} />
        </Grid>
        <Grid item xs={6} md={4} lg={2} borderRight={1}>
          <WhyUs
            icon={award}
            text={"276,505+"}
            subText={"Surgeries Performed"}
          />
        </Grid>
        <Grid item xs={6} md={4} lg={2} borderRight={1}>
          <WhyUs icon={doc} text={"92+ "} subText={"Specialized Doctors"} />
        </Grid>
        <Grid item xs={6} md={4} lg={2} borderRight={1}>
          <WhyUs icon={services} text={"35+"} subText={"Years of Experience"} />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <WhyUs icon={happyface} text={"40 Lac+"} subText={"Happy Patients"} />
        </Grid>
        <Grid item xs={6} md={4} lg={1} />
      </Grid>
    </Box>
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
    <JoinUs />
    <Footer />
  </ThemeProvider>
);

export default App;
