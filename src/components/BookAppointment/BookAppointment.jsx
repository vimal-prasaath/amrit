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

export const departmentConstants = {
  OPTHOMOLOGY: "opthomology",
  ORTHO: "ortho",
  PEDIATRICS: "pediatrics",
  GYNO: "gyno",
  DERMA: "dermatology",
  INTERNAL_MEDICINE: "internalMedicine",
  DIBETOLOGY: "diabetology",
  GEN_SURGERY: "generalSurgery",
  ENT: "ent",
  CARDIO: "cardiology",
  NEPHRO: "nephrology",
  NEURO: "neurology",
  PHYSIO: "physiotherapy",
  GASTRO: "gastroenterology",
  RADIO: "radiology",
  CC: "criticalCare",
};

const BookAppointment = () => {
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
              fullWidth
              placeholder="Patient Name"
              variant="outlined"
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
              variant="outlined"
              placeholder="Select A Specialities"
              select
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
                <MenuItem
                  value={index}
                  key={index + 1}
                  sx={{ textTransform: "capitalize" }}
                >
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              id="filled-basic"
              variant="outlined"
              placeholder="Date"
              type="date"
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
              variant="outlined"
              placeholder="Mobile"
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
        </Grid>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2.5, py: 1.25 }}
          >
            Book an Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BookAppointment;
