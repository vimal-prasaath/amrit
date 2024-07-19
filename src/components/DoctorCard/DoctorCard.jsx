import { Box, Button, Divider, Typography } from "@mui/material";
import { Slope } from "./DoctorCard.styled";
import avatar from "assets/images/background/avatar.jpeg";
import book from "assets/images/background/book.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
            variant="h6"
            mb={0.25}
            fontWeight="bold"
            display={"flex"}
            justifyContent={"space-between"}
          >
            Dr. M. Sohanraj
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
