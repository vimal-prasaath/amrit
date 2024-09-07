import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Link,
  Popover,
  Grid,
  IconButton,
  Drawer,
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { list } from "views/EyeCareDetails/internal-data/otherInternal";

const otherInternalsIds = list.map((item) => item.id);

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

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
    {
      text: "Internal Medicine",
      image: internalMeds,
      id: departmentConstants.INTERNAL_MEDICINE,
    },
    {
      text: "Diabetology",
      image: diabetology,
      id: departmentConstants.DIBETOLOGY,
    },
    { text: "Orthopedics", image: orthpedics, id: departmentConstants.ORTHO },
    {
      text: "Gen. Surgery & Laparoscopic",
      image: genSurgery,
      id: departmentConstants.GEN_SURGERY,
    },
    { text: "ENT", image: ent, id: departmentConstants.ENT },
    { text: "Cardiology", image: cardio, id: departmentConstants.CARDIO },
    { text: "Nephrology", image: nephrology, id: departmentConstants.NEPHRO },
    { text: "Neurology", image: nurology, id: departmentConstants.NEURO },
    { text: "Dermatology", image: dermatology, id: departmentConstants.DERMA },
    { text: "Physio", image: physio, id: departmentConstants.PHYSIO },
    { text: "Gastroenterology", image: gastro, id: departmentConstants.GASTRO },
    { text: "Radiology", image: icu, id: departmentConstants.RADIO },
    { text: "Critical care", image: criticalCare, id: departmentConstants.CC },
  ];

  return (
    <Box position={"sticky"} top={0} zIndex={1000}>
      <Box bgcolor="common.black">
        <Typography
          color="common.white"
          p={1.25}
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
        px={{ xs: 2, md: 10 }}
        display="flex"
        justifyContent="space-between"
        bgcolor={"common.white"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <IconButton
            size="large"
            onClick={toggleDrawer(true)}
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.down("md")]: {
                display: "inline-block",
              },
            })}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Link
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <img src={logo} alt="logo" style={{ width: "10rem" }} />
          </Link>
        </Box>
        <Box display="flex">
          <Link
            to="https://wa.me/917695957120"
            target="_blank"
            display="flex"
            mr={4}
            alignItems="center"
            component={RouterLink}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <img src={watsapp} width="40px" alt="watsapp" />
            <Box
              display="flex"
              flexDirection="column"
              ml={1.5}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              <Typography variant="subtitle2">Whatsapp</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                +91 76959 57120
              </Typography>
            </Box>
          </Link>

          <Divider orientation="vertical" flexItem />
          <Link
            to="tel:+919600711818"
            display="flex"
            ml={4}
            alignItems="center"
            component={RouterLink}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <img src={call} width="40px" alt="call" />
            <Box
              display="flex"
              flexDirection="column"
              ml={1.5}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              <Typography variant="subtitle2">Call Us</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                +91 9600 711818
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        py={1.5}
        px={10}
        display={{ md: "flex", xs: "none" }}
        justifyContent="space-between"
        boxShadow={"0 4px 15px 0 rgba(153, 153, 153, 0.2)"}
        bgcolor={"common.white"}
        // component={Paper}
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
          {/* <Link
            component={RouterLink}
            to="/blog"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Blog
            </Typography>
          </Link> */}
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
          <Link
            to="tel:+919600711818"
            component={RouterLink}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ py: 1.25, minWidth: "14rem" }}
            >
              Emergency Call
            </Button>
          </Link>
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
                    to={`${
                      otherInternalsIds.includes(item.id)
                        ? "department-internal/general"
                        : "department"
                    }/${item.id || departmentConstants.OPTHOMOLOGY}`}
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
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { minWidth: "20rem" },
        }}
      >
        <Box px={2} py={1}>
          <Box textAlign={"right"}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection={"column"}
            gap={"10px"}
            mt={"10%"}
          >
            <Typography
              component="span"
              mr={3.5}
              variant="h5"
              onClick={handleClick}
              display="inline-block"
              pb={1}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              Centre of excellence
            </Typography>

            <Link
              component={RouterLink}
              to={`/department/${departmentConstants.OPTHOMOLOGY}`}
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" pb={1} fontWeight={600} variant="h5">
                Eye Care
              </Typography>
            </Link>
            <Link
              component={RouterLink}
              to="/our-doctor"
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" pb={1} fontWeight={600} variant="h5">
                Our Doctors
              </Typography>
            </Link>
            {/* <Link
              component={RouterLink}
              to="/blog"
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" pb={1} fontWeight={600} variant="h5">
                Blog
              </Typography>
            </Link> */}
            <Link
              component={RouterLink}
              to="/contact"
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" fontWeight={600} variant="h5">
                Contact Us
              </Typography>
            </Link>
          </Box>
          <Box pt={5}>
            <Link
              to="tel:+919600711818"
              component={RouterLink}
              sx={{ textDecoration: "none" }}
              color={"common.black"}
            >
              <Button
                variant="contained"
                color="secondary"
                sx={{ py: 1.25, minWidth: "14rem" }}
              >
                Emergency Call
              </Button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
