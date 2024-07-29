import { Box, Typography, Grid, Link } from "@mui/material";
import { ServiceCard } from "components";
import opthomology from "assets/images/department/opthomology.svg";
import cardio from "assets/images/department/cardio.svg";
import criticalCare from "assets/images/department/critica-care.svg";
import dermatology from "assets/images/department/dermtology.svg";
import diabetology from "assets/images/department/dibetology.svg";
import ent from "assets/images/department/dibetology.svg";
import gastro from "assets/images/department/gastro.svg";
import genSurgery from "assets/images/department/gen-surgery.svg";
import gyno from "assets/images/department/gynecology.svg";
import icu from "assets/images/department/icu.svg";
import internalMeds from "assets/images/department/internal-medicine.svg";
import nephrology from "assets/images/department/nephrology.svg";
import nurology from "assets/images/department/neurology.svg";
import orthpedics from "assets/images/department/orthopedics.svg";
import physio from "assets/images/department/physio.svg";
import pediatric from "assets/images/service.svg";
import { Link as RouterLink } from "react-router-dom";
import { departmentConstants } from "routes";

const OurExcellence = () => {
  const services = [
    {
      text: "Ophthalmology",
      image: opthomology,
      id: departmentConstants.OPTHOMOLOGY,
    },
    { text: "Pediatrics (Pediatric surgery)", image: pediatric },
    { text: "Gynaecology", image: gyno },
    { text: "Internal Medicine", image: internalMeds },
    { text: "Diabetology", image: diabetology },
    { text: "Orthopedics", image: orthpedics, id: departmentConstants.ORTHO },
    { text: "Gen. Surgery & Laparoscopic", image: genSurgery },
    { text: "ENT", image: ent },
    { text: "Cardiology", image: cardio },
    { text: "Nephrology", image: nephrology },
    { text: "Neurology", image: nurology },
    { text: "Dermatology", image: dermatology },
    { text: "Physio", image: physio },
    { text: "Gastroenterology", image: gastro },
    { text: "Neonatal ICU", image: icu },
    { text: "Critical care", image: criticalCare },
  ];
  return (
    <Box py={4} px={10}>
      <Box textAlign="center">
        <Typography variant="subHeader" mb={4}>
          Our Centers of Excellence
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={6} md={4} lg={3} key={index}>
            <Link
              component={RouterLink}
              to={`/department/${
                service.id || departmentConstants.OPTHOMOLOGY
              }`}
              sx={{ textDecoration: "none" }}
              color={"common.black"}
            >
              <ServiceCard text={service.text} image={service.image} id />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurExcellence;
