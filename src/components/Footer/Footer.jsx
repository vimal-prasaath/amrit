import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import phone from "assets/images/phone.svg";
import email from "assets/images/email.svg";
import location from "assets/images/location.svg";
import logo from "assets/images/logo.svg";
import fb from "assets/images/fb.svg";
import pin from "assets/images/pinterest.svg";
import linkedIn from "assets/images/linkedin.svg";
import twitter from "assets/images/twitter.svg";
import { departmentConstants } from "routes";
import { Link as RouterLink } from "react-router-dom";

import { list } from "views/EyeCareDetails/internal-data/otherInternal";

const otherInternalsIds = list.map((item) => item.id);

const Footer = () => {
  const links = [
    {
      text: "Ophthalmology",

      id: departmentConstants.OPTHOMOLOGY,
    },
    {
      text: "Pediatrics (Pediatric surgery)",

      id: departmentConstants.PEDIATRICS,
    },
    { text: "Gynaecology", id: departmentConstants.GYNO },
    {
      text: "Internal Medicine",
      id: departmentConstants.INTERNAL_MEDICINE,
    },
    {
      text: "Diabetology",
      id: departmentConstants.DIBETOLOGY,
    },
    { text: "Orthopedics", id: departmentConstants.ORTHO },
    {
      text: "Gen. Surgery & Laparoscopic",
      id: departmentConstants.GEN_SURGERY,
    },
    { text: "ENT", id: departmentConstants.ENT },
  ];
  const links2 = [
    { text: "Cardiology", id: departmentConstants.CARDIO },
    { text: "Nephrology", id: departmentConstants.NEPHRO },
    { text: "Neurology", id: departmentConstants.NEURO },
    { text: "Dermatology", id: departmentConstants.DERMA },
    { text: "Physio", id: departmentConstants.PHYSIO },
    { text: "Gastroenterology", id: departmentConstants.GASTRO },
    { text: "Radiology", id: departmentConstants.RADIO },
    { text: "Critical care", id: departmentConstants.CC },
  ];

  return (
    <Box bgcolor="common.black" color="common.white">
      <Box px={10} py={5} display="flex" flexWrap="wrap">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3.5}>
            <Typography variant="h5" mb={3} fontWeight="bold">
              About Us
            </Typography>
            <Typography variant="subtitle2" width={"75%"}>
              Amrit Hospital | Multi-speciality Hospital | Expert Care Across
              All Specialties Leading Ophthalmology Department Affordable,
              Quality Healthcare | Chennai
            </Typography>
            <Box pt={3}>
              <Link
                component={RouterLink}
                sx={{ textDecoration: "none" }}
                to="https://facebook.com/amrithospitalchennai/"
                target="blank"
              >
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
              </Link>

              <Link component={RouterLink} sx={{ textDecoration: "none" }}>
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
              </Link>

              <Link
                component={RouterLink}
                sx={{ textDecoration: "none" }}
                to="https://www.linkedin.com/company/amrit-hospital/"
                target="blank"
              >
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
              </Link>

              <Link component={RouterLink} sx={{ textDecoration: "none" }}>
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
                  <img src={pin} alt="linkedin" />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.5}>
            <Typography variant="h5" mb={3} fontWeight="bold">
              Services
            </Typography>
            {links.map((item) => (
              <Link
                component={RouterLink}
                sx={{ textDecoration: "none" }}
                color={"common.white"}
                to={`${
                  otherInternalsIds.includes(item.id)
                    ? "department-internal/general"
                    : "department"
                }/${item.id || departmentConstants.OPTHOMOLOGY}`}
              >
                <Typography key={item} variant="subtitle2" pb={0.75}>
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} lg={2.5}>
            <Typography
              variant="h5"
              mb={3}
              visibility="hidden"
              fontWeight="bold"
            >
              Services
            </Typography>
            {links2.map((item) => (
              <Link
                component={RouterLink}
                sx={{ textDecoration: "none" }}
                color={"common.white"}
                to={`${
                  otherInternalsIds.includes(item.id)
                    ? "department-internal/general"
                    : "department"
                }/${item.id || departmentConstants.OPTHOMOLOGY}`}
              >
                <Typography key={item} variant="subtitle2" pb={0.75}>
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} lg={3.5}>
            <Typography variant="h5" mb={3} fontWeight="bold">
              Contact Us
            </Typography>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Amrit Hospital
              </Typography>
              <Box display="flex" alignItems="center" py={1}>
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

              <Typography variant="h6" fontWeight="bold">
                Amrit Medical Centre
              </Typography>
              <Box display="flex" alignItems="center" py={1}>
                <img src={location} alt="location" />
                <Box>
                  <Typography variant="subtitle2" ml={2}>
                    73/28, Dr Alagappa Road, Purasaiwakkam,
                  </Typography>
                  <Typography variant="subtitle2" ml={2}>
                    Chennai - 600084, Tamil Nadu, India
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
        sx={(theme) => ({
          [theme.breakpoints.down("lg")]: {
            display: "none",
          },
        })}
      >
        <img src={logo} alt="logo" />
        <Box display="flex" alignItems="center">
          <Link
            component={RouterLink}
            to={`/`}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={6}>
              Home
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to={`/department/${departmentConstants.OPTHOMOLOGY}`}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={6}>
              Eye Care
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/our-doctor"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={6}>
              Our Doctors
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/blog"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={6}>
              Blog
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/contact"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={6}>
              Contact Us
            </Typography>
          </Link>
          {/* <Typography component="span" mr={6}>
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
          <Typography component="span">Contact Us</Typography> */}
        </Box>
      </Box>
      <Typography py={2.25} textAlign="center" variant="body1">
        Amrit Hospital © 2023 All Right Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
