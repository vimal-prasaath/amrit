import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Paper,
  Link,
  Popover,
  Grid,
} from "@mui/material";
import logo from "assets/images/logo.svg";
import watsapp from "assets/images/watsapp.svg";
import call from "assets/images/call.svg";
import { Link as RouterLink } from "react-router-dom";
import { departmentConstants } from "routes";

import opthomology from "assets/images/menu/opthomology.svg";
import cardio from "assets/images/menu/cardio.svg";
import criticalCare from "assets/images/menu/critica-care.svg";
import dermatology from "assets/images/menu/dermtology.svg";
import diabetology from "assets/images/menu/dibetology.svg";
import ent from "assets/images/menu/dibetology.svg";
import gastro from "assets/images/menu/gastro.svg";
import genSurgery from "assets/images/menu/gen-surgery.svg";
import gyno from "assets/images/menu/gynecology.svg";
import icu from "assets/images/menu/icu.svg";
import internalMeds from "assets/images/menu/internal-medicine.svg";
import nephrology from "assets/images/menu/nephrology.svg";
import nurology from "assets/images/menu/neurology.svg";
import orthpedics from "assets/images/menu/orthopedics.svg";
import physio from "assets/images/menu/physio.svg";
import pediatric from "assets/images/menu/pedia.svg";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "menu-popover" : undefined;

  const services = [
    {
      text: "Ophthalmology",
      image: opthomology,
      id: departmentConstants.OPTHOMOLOGY,
    },
    {
      text: "Pediatrics (Pediatric surgery)",
      image: pediatric,
      id: departmentConstants.PEDIATRICS,
    },
    { text: "Gynaecology", image: gyno, id: departmentConstants.GYNO },
    { text: "Internal Medicine", image: internalMeds },
    { text: "Diabetology", image: diabetology },
    { text: "Orthopedics", image: orthpedics, id: departmentConstants.ORTHO },
    { text: "Gen. Surgery & Laparoscopic", image: genSurgery },
    { text: "ENT", image: ent },
    { text: "Cardiology", image: cardio },
    { text: "Nephrology", image: nephrology },
    { text: "Neurology", image: nurology },
    { text: "Dermatology", image: dermatology },
    { text: "Physio", image: physio },
    { text: "Gastroenterology", image: gastro },
    { text: "Neonatal ICU", image: icu },
    { text: "Critical care", image: criticalCare },
  ];

  return (
    <Box>
      <Box bgcolor="common.black">
        <Typography
          color="common.white"
          py={1.25}
          textAlign="center"
          variant="body1"
        >
          For Appointments & Enquiries : Pursaiwalkam-76959 57120 | Sowcarpet-
          044-2529 0468
        </Typography>
      </Box>
      <Box
        borderBottom={1}
        borderColor="#f3f3f3"
        py={1.5}
        px={10}
        display="flex"
        justifyContent="space-between"
      >
        <Link
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none" }}
          color={"common.black"}
        >
          <img src={logo} alt="logo" />
        </Link>
        <Box display="flex">
          <Box display="flex" mr={4} alignItems="center">
            <img src={watsapp} width="40px" alt="watsapp" />
            <Box display="flex" flexDirection="column" ml={1.5}>
              <Typography variant="subtitle2">Whatsapp</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                +91 9600 71 18 18
              </Typography>
            </Box>
          </Box>

          <Divider orientation="vertical" flexItem />
          <Box display="flex" ml={4} alignItems="center">
            <img src={call} width="40px" alt="call" />
            <Box display="flex" flexDirection="column" ml={1.5}>
              <Typography variant="subtitle2">Call Us</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                +91 9600 71 18 18
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        py={1.5}
        px={10}
        display="flex"
        justifyContent="space-between"
        // boxShadow={"0 4px 15px 0 rgba(153, 153, 153, 0.2)"}
        component={Paper}
        // elevation={9}
      >
        <Box display="flex" alignItems="center">
          <Typography
            component="span"
            mr={3.5}
            onClick={handleClick}
            display="inline-block"
            py={1}
            sx={{ cursor: "pointer" }}
          >
            Centre of excellence
          </Typography>

          <Link
            component={RouterLink}
            to={`/department/${departmentConstants.OPTHOMOLOGY}`}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Eye Care
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/our-doctor"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Our Doctors
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              International
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/contact"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Contact Us
            </Typography>
          </Link>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{ py: 1.25, minWidth: "14rem" }}
          >
            Emergency Call
          </Button>
        </Box>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          maxWidth="80rem"
          sx={{
            background:
              "linear-gradient(90deg, rgba(46,173,159,0.075) 0%, rgba(217,65,54,0.075) 100%)",
            backgroundSize: "100% 100%",
          }}
        >
          <Grid container spacing={4} p={3}>
            {services.map((item) => {
              return (
                <Grid key={item.id} item xs={6} md={3} onClick={handleClose}>
                  <Link
                    component={RouterLink}
                    to={`department/${
                      item.id || departmentConstants.OPTHOMOLOGY
                    }`}
                    sx={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                    color={"common.black"}
                  >
                    <img src={item.image} alt={item.text} />{" "}
                    <Typography pl={2}>{item.text} </Typography>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Popover>
    </Box>
  );
};

export default Header;
