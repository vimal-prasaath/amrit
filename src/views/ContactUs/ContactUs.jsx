import { Box, Typography, Grid, TextField, Button, Link } from "@mui/material";
import { Banner } from "./components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link as RouterLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <Box>
      <Banner />
      <Box py={{ md: 10, xs: 5 }} px={{ md: 18, xs: 6 }} textAlign="center">
        <Typography
          fontSize={"3.125rem"}
          fontWeight="bold"
          textTransform="uppercase"
        >
          In need of help?
        </Typography>
        <Typography fontSize={"2.125rem"} mb={2} textTransform="uppercase">
          Get in touch with us
        </Typography>
        <Grid container spacing={4} pt={2}>
          <Grid item xs={12} md={6}>
            <Box
              display={"flex"}
              alignItems={"center"}
              borderBottom={1}
              borderColor="divider"
              py={2}
              width={{ md: "75%", xs: "100%" }}
            >
              <Box
                width={"5rem"}
                height={"5rem"}
                bgcolor="#f4f4f4"
                borderRadius="50%"
                mr={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <PhoneIcon fontSize="large" color="primary" />
              </Box>
              <Box display={"flex"}>
                <Link
                  to="tel:+919600711818"
                  display="flex"
                  alignItems="center"
                  component={RouterLink}
                  sx={{ textDecoration: "none" }}
                  color={"common.black"}
                >
                  <Typography fontWeight={"bold"} variant="body2">
                    +91 96007 11818
                  </Typography>
                </Link>
                <Link
                  to="https://wa.me/917695957120"
                  target="_blank"
                  display="flex"
                  ml={4}
                  alignItems="center"
                  component={RouterLink}
                  sx={{ textDecoration: "none" }}
                  color={"common.black"}
                >
                  <Typography fontWeight={"bold"} variant="body2">
                    +91 76959 57120
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              borderBottom={1}
              borderColor="divider"
              py={2}
              width={{ md: "75%", xs: "100%" }}
            >
              <Box
                width={"5rem"}
                height={"5rem"}
                bgcolor="#f4f4f4"
                borderRadius="50%"
                mr={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <EmailIcon fontSize="large" color="primary" />
              </Box>
              <Box>
                <Typography fontWeight={"bold"} variant="body2">
                  info@amrithospital.com
                </Typography>
              </Box>
            </Box>
            <Link
              component={RouterLink}
              to="https://www.google.com/maps/place/Amrit+Hospital/@13.0921776,80.2766416,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526f57a19c437b:0x36fedbe9eaf5a945!8m2!3d13.0921724!4d80.2792165!16s%2Fg%2F1tmcknl7?entry=ttu"
              target="blank"
              sx={{ textDecoration: "none" }}
              color={"common.black"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                py={2}
                width={{ md: "75%", xs: "100%" }}
              >
                <Box
                  width={"5rem"}
                  height={"5rem"}
                  bgcolor="#f4f4f4"
                  borderRadius="50%"
                  mr={3}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <LocationOnIcon fontSize="large" color="primary" />
                </Box>
                <Box textAlign={"left"}>
                  <Typography fontWeight={"bold"} variant="body2">
                    362, mint street, opposite to
                  </Typography>
                  <Typography fontWeight={"bold"} variant="body2">
                    Jain temple, Sowcarpet
                  </Typography>
                  <Typography fontWeight={"bold"} variant="body2">
                    Chennai - 600079, Tamil Nadu, India
                  </Typography>
                </Box>
              </Box>
            </Link>
            <Link
              component={RouterLink}
              to="https://www.google.com/maps/place/Amrit+Medical+Centre/@13.0812049,80.2495037,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526700708a823f:0x6fa3f92cb170a588!8m2!3d13.0811997!4d80.2520786!16s%2Fg%2F11wj00p75w?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="blank"
              sx={{ textDecoration: "none" }}
              color={"common.black"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                py={2}
                width={{ md: "75%", xs: "100%" }}
              >
                <Box
                  width={"5rem"}
                  height={"5rem"}
                  bgcolor="#f4f4f4"
                  borderRadius="50%"
                  mr={3}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <LocationOnIcon fontSize="large" color="primary" />
                </Box>
                <Box textAlign={"left"}>
                  <Typography fontWeight={"bold"} variant="body2">
                    73/28, Dr Alagappa Road, Purasaiwakkam,
                  </Typography>
                  <Typography fontWeight={"bold"} variant="body2">
                    Chennai - 600084, Tamil Nadu, India
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={4} pt={2}>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  placeholder="Your Name"
                  variant="filled"
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    sx: {
                      borderRadius: "0.5rem",
                      px: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  variant="filled"
                  placeholder="Email"
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    sx: {
                      borderRadius: "0.5rem",
                      px: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  variant="filled"
                  placeholder="Phone Number"
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    sx: {
                      borderRadius: "0.5rem",
                      px: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  variant="filled"
                  placeholder="Subject"
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    sx: {
                      borderRadius: "0.5rem",
                      px: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  multiline
                  id="filled-basic"
                  variant="filled"
                  placeholder="Write Message"
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    minRows: 5,
                    sx: {
                      borderRadius: "0.5rem",
                      px: 2,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12} textAlign="left">
                <Button variant="contained" color="primary" sx={{ mt: 1.5 }}>
                  Submit Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
