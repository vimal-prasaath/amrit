import { Box, Divider, Typography } from "@mui/material";
import { Slope } from "./DoctorCard.styled";
import avatar from "assets/images/background/avatar.jpeg";
import book from "assets/images/background/book.png";

const DoctorCard = ({ detailView }) => {
  return (
    <Box
      width={detailView ? "18.75rem" : "23.75rem"}
      sx={{
        boxShadow: "0 0 12px 0 rgba(153, 153, 153, 0.2)",
        borderRadius: "0.75rem",
      }}
    >
      <Box
        sx={{
          background: `url(${avatar}) no-repeat`,
          backgroundSize: "100%",
          backgroundPositionY: "top",
          boxShadow: "0 0 12px 0 rgba(153, 153, 153, 0.2)",
          borderRadius: "0.75rem",
          height: "21rem",
        }}
      ></Box>
      <Box position="relative" width="100%">
        <Slope></Slope>
        <Box p={2} position="relative" zIndex={1} bgcolor={"common.white"}>
          <Typography variant="h6" mb={0.25} fontWeight="bold">
            Dr. M. Sohanraj
          </Typography>
          <Typography variant="body2" color="#999" mb={1}>
            Director & Eye Specialist
          </Typography>
          <Divider />
          <Typography variant="body2" color="#999" mt={1}>
            MS in Ophthalmology & also holds a DOMS
          </Typography>
        </Box>
      </Box>
      {detailView && (
        <Box>
          <img
            src={book}
            alt="book"
            width="100%"
            style={{ marginBottom: "-0.5rem", cursor: "pointer" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default DoctorCard;
