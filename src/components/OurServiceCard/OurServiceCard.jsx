import { Box, Typography, Button } from "@mui/material";
import { BookAppointmentModel } from "components";
import { useState } from "react";

const OurServiceCard = ({ header, description, icon }) => {
  const [openModel, setOpenModel] = useState(false);

  const openPopup = () => setOpenModel(true);
  const closePopup = () => setOpenModel(false);

  return (
    <Box
      boxShadow={"0 0 10px 0 rgba(153, 153, 153, 0.2)"}
      p={4}
      mt={6}
      height={"calc(100% - 3rem)"}
      borderRadius={"1rem"}
      bgcolor={"common.white"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        width="6.25rem"
        height="6.25rem"
        borderRadius="0.5rem"
        position="relative"
        top="-5rem"
        bgcolor="common.white"
        p={1.5}
        mx="auto"
        boxShadow={"0 0 12px 0 rgba(153, 153, 153, 0.2)"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img src={icon} alt="icon" width={"100%"} />
      </Box>
      <Typography variant="subtitle1" fontWeight="bold" mt={-6}>
        {header}
      </Typography>
      <Typography variant="body2" color="#999" py={3.5}>
        {description}
      </Typography>
      <Box mt={"auto"}>
        <Button variant="outlined" onClick={openPopup}>
          Book Appointment
        </Button>
      </Box>
      {openModel && <BookAppointmentModel onClose={closePopup} />}
    </Box>
  );
};

export default OurServiceCard;
