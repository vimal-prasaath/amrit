import { Box, Typography, Button } from "@mui/material";
import { JoinUsContainer } from "./joinus.styled";
import joinus from "assets/images/background/joinus.jpeg";

const JoinUs = () => {
  return (
    <Box pb={6}>
      <JoinUsContainer
        image={joinus}
        px={10}
        display="flex"
        alignItems="end"
        marginBottom={16}
      >
        <Box
          width="45rem"
          p={6}
          bgcolor="common.white"
          borderRadius={"0rem 3rem 0.25rem 3rem"}
          boxShadow={"0 10px 50px 0 rgba(0, 0, 0, 0.1)"}
          marginBottom={-16}
        >
          <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Donate Eyes, Change Lives
          </Typography>
          <Typography variant="body2" color="#999" py={4}>
            Give the gift of sight and transform lives through eye donation and
            transplant. Your generosity can bring light and clarity to someone's
            world.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2.5, minWidth: "10rem" }}
          >
            Join Us
          </Button>
        </Box>
      </JoinUsContainer>
    </Box>
  );
};

export default JoinUs;
