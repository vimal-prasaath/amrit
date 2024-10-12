import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import axios from "axios";

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

export const location = ["Pursaiwalkam", "Sowcarpet"];

const MOBILE = "917695957120";

const BookAppointment = () => {
  const [inputValues, setInputValues] = useState({});

  const URL = (message) => `https://wa.me/${MOBILE}?text=${encodeURI(message)}`;

  const date = new Date();
  let month = date.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;
  let year = date.getFullYear();
  let day = date.getDate();

  const currentDate = `${year}-${month}-${day}`;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const generateMessageString = () => {
    let values = Object.keys(inputValues);
    let message = "";
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
    postData({
      patientName: inputValues.Patient,
      patientMobileNo: Number(inputValues.Phone),
      patientApptDate: new Date(inputValues.Date).toISOString(),
    });
    window.open(whatsAppUrl);
  };

  const postData = async (payload) => {
    try {
      const response = await axios.post(
        "http://210.18.187.203:8080/shc/onlineappointment",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": true,
            "Content-Security-Policy": "upgrade-insecure-requests",
          },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Box
      borderRadius={"0.5rem"}
      boxShadow={"0 0 12px 0 rgba(153, 153, 153, 0.2)"}
      maxWidth={"45rem"}
      color="text.primary"
      bgcolor="common.white"
      mx="auto"
    >
      <Box borderBottom={1} borderColor={"divider"} px={3} py={2}>
        <Typography variant="h5" display="flex" alignItems="center">
          <CalendarMonthIcon fontSize="large" sx={{ mr: 1 }} /> Book an
          Appointment
        </Typography>
      </Box>
      <Box px={3} pb={3} pt={2}>
        <Grid container spacing={4} pt={2}>
          <Grid item xs={6} md={6}>
            <TextField
              onChange={onInputChange}
              fullWidth
              placeholder="Patient Name"
              variant="outlined"
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
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              onChange={onInputChange}
              variant="outlined"
              placeholder="Select A Specialities"
              select
              inputProps={{
                name: "Department",
              }}
              InputProps={{
                hiddenLabel: true,
                disableUnderline: true,
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
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              id="filled-basic"
              onChange={onInputChange}
              variant="outlined"
              placeholder="Date"
              type="date"
              inputProps={{
                name: "Date",
                min: currentDate,
              }}
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
              onChange={onInputChange}
              fullWidth
              id="filled-basic"
              variant="outlined"
              placeholder="Mobile"
              inputProps={{
                name: "Phone",
              }}
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
              onChange={onInputChange}
              variant="outlined"
              placeholder="Select A Specialities"
              select
              inputProps={{
                name: "Location",
              }}
              InputProps={{
                hiddenLabel: true,
                disableUnderline: true,
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
                Select Location
              </MenuItem>

              {location?.map((item, index) => (
                <MenuItem value={item} key={index + 1}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} md={6}>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 1 }}
                onClick={generateMessageString}
              >
                Book an Appointment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BookAppointment;
