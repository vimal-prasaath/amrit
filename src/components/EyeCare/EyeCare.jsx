import { Box, Grid, Typography, Button, Link } from "@mui/material";
import eyeCare from "assets/images/background/eyeCare.png";
import { Link as RouterLink } from "react-router-dom";

const EyeCareCard = ({ data, id, departmentId }) => {
  return (
    <Box
      p={3}
      borderRadius={"1.75rem"}
      boxShadow={"0 0 10px 0 rgba(153, 153, 153, 0.2)"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
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
      <Box textAlign="center" pt={3} mt={"auto"}>
        <Link
          component={RouterLink}
          to={`/department-internal/${departmentId}/${data.id}`}
          sx={{ textDecoration: "none" }}
          color={"common.black"}
        >
          <Button variant="outlined">Read More</Button>
        </Link>
      </Box>
    </Box>
  );
};

const EyeCare = ({ services, departmentId, serviceHeader }) => {
  return (
    <Box py={{ md: 10, xs: 5 }} px={{ md: 8, xs: 6 }} bgcolor={"#f6f6f6"}>
      <Box mb={2} textAlign="center">
        <Typography fontSize={"3.125rem"} fontWeight="bold" variant="subHeader">
          {serviceHeader}
        </Typography>
      </Box>

      <Grid container spacing={4} pt={8}>
        {services.map((item, index) => (
          <Grid key={index + "service"} item xs={12} md={4} lg={3}>
            <EyeCareCard
              data={item}
              id={index + 1}
              departmentId={departmentId}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EyeCare;
