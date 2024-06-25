import { Box, Typography, Grid, IconButton } from "@mui/material";
import phone from "assets/images/phone.svg";
import email from "assets/images/email.svg";
import location from "assets/images/location.svg";
import logo from "assets/images/logo.svg";
import fb from "assets/images/fb.svg";
import pin from "assets/images/pinterest.svg";
import linkedIn from "assets/images/linkedin.svg";
import twitter from "assets/images/twitter.svg";

const Footer = () => {
  const links = [
    "Ophthalmology",
    "Pediatrics & Pediatrics Surgery",
    "Obstetrics and Gynecology",
    "Internal Medicine",
    "Diabetology",
    "Orthopedics",
    "General Surgery & Laparoscopic",
    "ENT",
  ];
  const links2 = [
    "Cardiology",
    "Nephrology",
    "Neurology",
    "Dermatology",
    "Physiotherapy",
    "Gastroenteology",
    "Neonatal ICU",
  ];

  return (
    <Box bgcolor="common.black" color="common.white">
      <Box px={10} py={5} display="flex" flexWrap="wrap">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3.5}>
            <Typography variant="h5" mb={3} fontWeight="bold">
              About Us
            </Typography>
            <Typography variant="subtitle2" width={"75%"}>
              Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor
              incididunt labore dolore magna aliqua enim ad minim.
            </Typography>
            <Box pt={3}>
              <IconButton
                size="small"
                sx={{
                  background: "black",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.3)",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "2.5rem",
                  mr: 2,
                }}
              >
                <img src={fb} alt="fb" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  background: "black",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.3)",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "2.5rem",
                  mr: 2,
                }}
              >
                <img src={twitter} alt="twitter" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  background: "black",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.3)",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "2.5rem",
                  mr: 2,
                }}
              >
                <img src={linkedIn} alt="linkedin" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  background: "black",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.3)",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "2.5rem",
                }}
              >
                <img src={pin} alt="pinterest" />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={2.5}>
            <Typography variant="h5" mb={3} fontWeight="bold">
              Services
            </Typography>
            {links.map((item) => (
              <Typography key={item} variant="subtitle2" pb={0.75}>
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={6} lg={2.5}>
            <Typography
              variant="h5"
              mb={3}
              visibility="hidden"
              fontWeight="bold"
            >
              Services
            </Typography>
            {links2.map((item) => (
              <Typography key={item} variant="subtitle2" pb={0.75}>
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={6} lg={3.5}>
            <Typography variant="h5" mb={3} fontWeight="bold">
              Contact Us
            </Typography>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Amrit Medical Centre
              </Typography>
              <Box display="flex" alignItems="center" pt={3}>
                <img src={location} alt="location" />
                <Box>
                  <Typography variant="subtitle2" ml={2}>
                    362, mint street, opposite to Jain temple.
                  </Typography>
                  <Typography variant="subtitle2" ml={2}>
                    Sowcarpet, Chennai - 600079, Tamil Nadu, India
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" pt={3}>
                <img src={phone} alt="phone" />

                <Typography variant="subtitle2" ml={2}>
                  044–25290468 , 044–25292661
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" pt={3}>
                <img src={email} alt="email" />

                <Typography variant="subtitle2" ml={2}>
                  info@amrithospitals.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        bgcolor="common.white"
        color="common.black"
        maxWidth={"80rem"}
        borderRadius="1rem"
        padding={2}
        margin="auto"
        display="flex"
        justifyContent="space-around"
      >
        <img src={logo} alt="logo" />
        <Box display="flex" alignItems="center">
          <Typography component="span" mr={6}>
            Home
          </Typography>
          <Typography component="span" mr={6}>
            Eye Care
          </Typography>
          <Typography component="span" mr={6}>
            Our Doctors
          </Typography>
          <Typography component="span" mr={6}>
            International
          </Typography>
          <Typography component="span">Contact Us</Typography>
        </Box>
      </Box>
      <Typography py={2.25} textAlign="center" variant="body1">
        Amrit Hospital © 2023 All Right Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
