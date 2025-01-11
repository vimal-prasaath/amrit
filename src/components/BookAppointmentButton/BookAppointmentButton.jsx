import { BookAppointmentModel } from "components";
import { useState } from "react";
import { Box, Button } from "@mui/material";

const BookAppointmentButton = () => {
  const [openModel, setOpenModel] = useState(false);

  const openPopup = () => setOpenModel(true);
  const closePopup = () => setOpenModel(false);
  return (
    <>
      <Box mt={"1.5rem"}>
        <Button variant="contained" onClick={openPopup}>
          Book Appointment
        </Button>
      </Box>
      {openModel && <BookAppointmentModel onClose={closePopup} />}
    </>
  );
};

export default BookAppointmentButton;
