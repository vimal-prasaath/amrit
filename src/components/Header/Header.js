import React from "react";
import { Box, Typography, Divider, Button, Paper, Link } from "@mui/material";
import logo from "assets/images/logo.svg";
import watsapp from "assets/images/watsapp.svg";
import call from "assets/images/call.svg";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
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
        borderColor="divider"
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
          <Link
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Centre of excellence
            </Typography>
          </Link>

          <Link
            component={RouterLink}
            to="/eyecare"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Eye Care
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/"
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
            to="/"
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
            color="primary"
            sx={{ mr: 2.5, py: 1.25 }}
          >
            Book Health Check-Up
          </Button>
          <Button variant="contained" color="secondary" sx={{ py: 1.25 }}>
            Book an Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
