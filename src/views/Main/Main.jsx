import { Header, Footer, BookAppointmentModel } from "components";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";

const Main = () => {
  const [openModel, setOpenModel] = useState(false);

  const openPopup = () => setOpenModel(true);
  const closePopup = () => setOpenModel(false);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Box
        onClick={openPopup}
        position={"fixed"}
        bottom={"1.5rem"}
        right={"1.5rem"}
      >
        <Fab color={"primary"}>
          <CalendarMonthIcon fontSize="small" color="inherit" />
        </Fab>
      </Box>
      <ScrollRestoration />
      {openModel && <BookAppointmentModel onClose={closePopup} />}
    </>
  );
};

export default Main;
