import { Box, Button, Divider, Typography } from "@mui/material";
import { Slope } from "./DoctorCard.styled";
// import avatar from "assets/images/background/avatar.jpeg";
import book from "assets/images/background/book.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BookAppointmentModel from "components/BookAppointmentModel";
import { useState } from "react";

const DoctorCard = ({ detailView, data }) => {
  const [openModel, setOpenModel] = useState(false);

  const openPopup = () => setOpenModel(true);
  const closePopup = () => setOpenModel(false);
  return (
    <Box
      width={detailView ? "18.75rem" : "23.75rem"}
      // height={"100%"}
      // bgcolor={"white"}
      sx={{
        boxShadow: "0 0 12px 0 rgba(153, 153, 153, 0.2)",
        borderRadius: "0.75rem",
      }}
    >
      <Box
        sx={{
          background: `url(${data.img}) no-repeat`,
          backgroundSize: "100%",
          backgroundPositionY: "top",
          boxShadow: "0 0 12px 0 rgba(153, 153, 153, 0.2)",
          borderRadius: "0.75rem",
          height: "21rem",
        }}
      ></Box>
      <Box position="relative" width="100%">
        <Slope></Slope>
        <Box
          p={2}
          position="relative"
          zIndex={1}
          bgcolor={"common.white"}
          sx={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <Typography
            variant="body2"
            mb={0.25}
            fontWeight="bold"
            display={"flex"}
            justifyContent={"space-between"}
          >
            {data?.name}
            <Button sx={{ p: 0, minWidth: "0", borderRadius: "50%" }}>
              <Box
                bgcolor={"primary.main"}
                borderRadius={"50%"}
                color={"common.white"}
                p={1}
                width={"2rem"}
                height={"2rem"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <ArrowForwardIosIcon fontSize="small" color="inherit" />
              </Box>
            </Button>
          </Typography>
          <Typography
            variant="body2"
            color="#999"
            mb={1}
            title={data?.specialist}
            style={{
              display: "-webkit-box",
              "-webkit-line-clamp": "1",
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {data?.specialist}
          </Typography>
          <Divider />
          <Typography variant="body2" color="#999" mt={1}>
            {data?.hospitals}

            {/* MS in Ophthalmology & also holds a DOMS */}
          </Typography>
        </Box>
      </Box>
      {detailView && (
        <Box onClick={openPopup}>
          <img
            src={book}
            alt="book"
            width="100%"
            style={{ marginBottom: "-0.5rem", cursor: "pointer" }}
          />
        </Box>
      )}
      {openModel && <BookAppointmentModel onClose={closePopup} />}
    </Box>
  );
};

export default DoctorCard;
