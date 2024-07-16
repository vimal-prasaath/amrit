import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { Banner } from "./components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  return (
    <Box>
      <Banner />
      <Box py={10} px={18} textAlign="center">
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
          <Grid item xs={6} md={6}>
            <Box
              display={"flex"}
              alignItems={"center"}
              borderBottom={1}
              borderColor="divider"
              py={2}
              width="75%"
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
              <Box>
                <Typography fontWeight={"bold"} variant="body2">
                  044 - 2002002
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              borderBottom={1}
              borderColor="divider"
              py={2}
              width="75%"
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
            <Box display={"flex"} alignItems={"center"} py={2} width="75%">
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
          </Grid>
          <Grid item xs={6} md={6}>
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
