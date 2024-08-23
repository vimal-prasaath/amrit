import { Box, Typography, Button, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import gradient from "assets/images/background/gradientbg.jpeg";
import ourservice1 from "assets/images/background/ourservice.png";
import ourservice2 from "assets/images/background/ourservice2.png";

import EastIcon from "@mui/icons-material/East";

const OurFacility = () => {
  return (
    <Box
      p={{ md: 10, xs: 5 }}
      sx={{
        background: `url(${gradient}) no-repeat`,
        backgroundSize: "100% 100%",
      }}
      minHeight="31.25rem"
    >
      <Box textAlign="center" mb={8}>
        <Typography variant="subHeader">
          Our Revolutionary Vision Care
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} height="37.5rem">
          <img
            src={ourservice2}
            width="100%"
            height="100%"
            alt="service"
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            fontSize={"3.125rem"}
            fontWeight="bold"
            mb={2}
            textTransform="uppercase"
          >
            Specs removal Smile Pro
          </Typography>
          <Typography fontSize={"2rem"} textTransform="uppercase" mb={4}>
            Experience Life Without Glasses in 9 seconds
          </Typography>
          <Typography variant="h6" color="#777" lineHeight={2}>
            Seconds Discover the groundbreaking Specs Removal Smile Pro, a swift
            and painless procedure that can change your life in just 9 seconds.
            Say goodbye to glasses and enjoy the freedom of crystal-clear vision
            with this innovative treatment. Transform your daily life with the
            precision and ease of Smile Pro.
          </Typography>
          <Box>
            <Link
              component={RouterLink}
              to="/department-internal/opthomology/smileProSurgery"
              sx={{ textDecoration: "none" }}
              color={"common.black"}
            >
              <Button color="primary" variant="text" sx={{ px: 0 }}>
                <Box
                  bgcolor={"primary.main"}
                  borderRadius={"0.5rem"}
                  color={"common.white"}
                  p={1}
                  width={"2.5rem"}
                  height={"2.5rem"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                  mr={1.5}
                >
                  <EastIcon fontSize="small" color="inherit" />
                </Box>
                Learn more
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} mt={4}>
        <Grid
          item
          xs={12}
          md={6}
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
            <Link
              component={RouterLink}
              to="/department-internal/opthomology/cataract"
              sx={{ textDecoration: "none" }}
              color={"common.black"}
            >
              <Button color="primary" variant="text" sx={{ px: 0 }}>
                <Box
                  bgcolor={"primary.main"}
                  borderRadius={"0.5rem"}
                  color={"common.white"}
                  p={1}
                  width={"2.5rem"}
                  height={"2.5rem"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                  mr={1.5}
                >
                  <EastIcon fontSize="small" color="inherit" />
                </Box>
                Learn more
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} height="37.5rem">
          <img
            src={ourservice1}
            width="100%"
            height="100%"
            alt="service"
            style={{ objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurFacility;
