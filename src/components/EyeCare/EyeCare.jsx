import { Box, Grid, Typography, Button, Link } from "@mui/material";
import eyeCare from "assets/images/background/eyeCare.png";
import { Link as RouterLink } from "react-router-dom";

const EyeCareCard = ({ data, id }) => {
  return (
    <Box
      p={3}
      borderRadius={"1.75rem"}
      boxShadow={"0 0 10px 0 rgba(153, 153, 153, 0.2)"}
    >
      <Box
        sx={{
          background: `url(${eyeCare}) no-repeat`,
          backgroundSize: "contain",
          backgroundPosition: "right",
        }}
      >
        <Box
          width="5.625rem"
          height="5.625rem"
          borderRadius="50%"
          bgcolor="primary.light"
          fontSize="3.125rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {id}
        </Box>
      </Box>
      <Typography variant="subtitle1" my={2} fontWeight={600}>
        {data.label}
      </Typography>
      <Typography variant="body2" color="#999">
        {data.content}
      </Typography>
      <Box textAlign="center" pt={3}>
        <Link
          component={RouterLink}
          to={`/eyecare-internal/${data.id}`}
          sx={{ textDecoration: "none" }}
          color={"common.black"}
        >
          <Button variant="outlined">Read More</Button>
        </Link>
      </Box>
    </Box>
  );
};

const EyeCare = ({ services }) => {
  return (
    <Box py={10} px={8} bgcolor={"#f6f6f6"}>
      <Typography
        fontSize={"3.125rem"}
        fontWeight="bold"
        mb={2}
        textAlign="center"
      >
        Super-Specialty Eye Care
      </Typography>
      <Grid container spacing={4} pt={8}>
        {services.map((item, index) => (
          <Grid key={index + "service"} item xs={6} md={4} lg={3}>
            <EyeCareCard data={item} id={index + 1} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EyeCare;
