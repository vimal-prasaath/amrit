import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Dialog,
  IconButton,
} from "@mui/material";
import bg from "assets/images/background/popup.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import location from "assets/images/location.svg";
import { useState } from "react";
// import phone from "assets/images/phone.svg";

export const departmentConstants = {
  OPTHOMOLOGY: "Opthomology",
  ORTHO: "Ortho",
  PEDIATRICS: "Pediatrics",
  GYNO: "Gyno",
  DERMA: "Dermatology",
  INTERNAL_MEDICINE: "InternalMedicine",
  DIBETOLOGY: "Diabetology",
  GEN_SURGERY: "GeneralSurgery",
  ENT: "ENT",
  CARDIO: "Cardiology",
  NEPHRO: "Nephrology",
  NEURO: "Neurology",
  PHYSIO: "Physiotherapy",
  GASTRO: "Gastroenterology",
  RADIO: "Radiology",
  CC: "CriticalCare",
};

const MOBILE = "917695957120";

const BookAppointmentModel = ({ onClose, docName }) => {
  const [inputValues, setInputValues] = useState({});

  const URL = (message) => `https://wa.me/${MOBILE}?text=${encodeURI(message)}`;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const generateMessageString = () => {
    let values = Object.keys(inputValues);
    let message = docName ? "*Doctor*" + " : " + docName + "\n" : "";
    values.forEach(
      (value) =>
        (message =
          message +
          "\n" +
          "*" +
          value.toUpperCase() +
          "*" +
          " : " +
          inputValues[value])
    );
    const whatsAppUrl = URL(message);
    window.open(whatsAppUrl);
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="md"
      slotProps={{
        backdrop: {
          sx: {
            background: "rgba(0,0,0, 0.8)",
          },
        },
      }}
    >
      <Box
        borderRadius={"0.5rem"}
        boxShadow={"0 0 12px 0 rgba(153, 153, 153, 0.2)"}
        maxWidth={"43rem"}
        color="text.primary"
        bgcolor="common.white"
        display={"flex"}
      >
        <Box
          minWidth={"19rem"}
          color="#ccc"
          display={{ md: "flex", xs: "none" }}
          flexDirection={"column"}
          justifyContent={"end"}
          p={1}
          sx={{
            background: `url(${bg}) no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <Typography variant="body" fontWeight="bold" pl={4.5}>
            Amrit Hospital
          </Typography>
          <Box display="flex" alignItems="center" pt={1}>
            <img src={location} alt="location" />
            <Box>
              <Typography variant="subtitle2" ml={2}>
                362, mint street, opposite to Jain temple. Sowcarpet, Chennai -
                600079, Tamil Nadu, India
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" pt={1}>
            <img src={location} alt="location" />
            <Box>
              <Typography variant="subtitle2" ml={2}>
                73/28, Dr Alagappa Road, Purasaiwakkam, Chennai - 600084, Tamil
                Nadu, India
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box flexGrow={1}>
          <Box
            borderBottom={1}
            borderColor={"divider"}
            px={3}
            py={1.5}
            display="flex"
            justifyContent={"space-between"}
          >
            <Typography
              variant="body2"
              display="flex"
              alignItems="center"
              fontWeight={600}
            >
              Book an Appointment
            </Typography>
            <IconButton color="secondary" onClick={onClose}>
              <HighlightOffRoundedIcon />
            </IconButton>
          </Box>
          <Box px={3} pb={3} pt={2}>
            <Grid container spacing={2.5} pt={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Patient Name"
                  variant="outlined"
                  size="small"
                  onChange={onInputChange}
                  inputProps={{ name: "Patient" }}
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Select A Specialities"
                  select
                  onChange={onInputChange}
                  inputProps={{
                    name: "Department",
                  }}
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    size: "small",
                    sx: {
                      borderRadius: "0.5rem",
                      px: 1,
                    },
                  }}
                  SelectProps={{
                    displayEmpty: true,
                    defaultValue: "",
                    IconComponent: KeyboardArrowDownIcon,
                  }}
                >
                  <MenuItem value="" disabled>
                    Select A Specialities
                  </MenuItem>

                  {Object.values(departmentConstants)?.map((item, index) => (
                    <MenuItem value={item} key={index + 1}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  variant="outlined"
                  placeholder="Date"
                  type="date"
                  onChange={onInputChange}
                  inputProps={{
                    name: "Date",
                  }}
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    size: "small",
                    sx: {
                      borderRadius: "0.5rem",
                      px: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  variant="outlined"
                  placeholder="Mobile"
                  onChange={onInputChange}
                  inputProps={{
                    name: "Phone",
                  }}
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    size: "small",
                    sx: {
                      borderRadius: "0.5rem",
                      px: 1,
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Box textAlign="left">
              <Button
                variant="contained"
                size="small"
                color="primary"
                sx={{ mt: 2.5, py: 1.25 }}
                onClick={generateMessageString}
              >
                Book an Appointment
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default BookAppointmentModel;
