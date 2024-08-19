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
import { list } from "views/EyeCareDetails/internal-data/otherInternal";

const otherInternalsIds = list.map((item) => item.id);

const OurExcellence = () => {
  const services = [
    {
      text: "Ophthalmology",
      image: opthomology,
      id: departmentConstants.OPTHOMOLOGY,
    },
    {
      text: "Pediatrics (Pediatric surgery)",
      image: pediatric,
      id: departmentConstants.PEDIATRICS,
    },
    { text: "Gynaecology", image: gyno, id: departmentConstants.GYNO },
    {
      text: "Internal Medicine",
      image: internalMeds,
      id: departmentConstants.INTERNAL_MEDICINE,
    },
    {
      text: "Diabetology",
      image: diabetology,
      id: departmentConstants.DIBETOLOGY,
    },
    { text: "Orthopedics", image: orthpedics, id: departmentConstants.ORTHO },
    {
      text: "Gen. Surgery & Laparoscopic",
      image: genSurgery,
      id: departmentConstants.GEN_SURGERY,
    },
    { text: "ENT", image: ent, id: departmentConstants.ENT },
    { text: "Cardiology", image: cardio, id: departmentConstants.CARDIO },
    { text: "Nephrology", image: nephrology, id: departmentConstants.NEPHRO },
    { text: "Neurology", image: nurology, id: departmentConstants.NEURO },
    { text: "Dermatology", image: dermatology, id: departmentConstants.DERMA },
    { text: "Physio", image: physio, id: departmentConstants.PHYSIO },
    { text: "Gastroenterology", image: gastro, id: departmentConstants.GASTRO },
    { text: "Radiology", image: icu, id: departmentConstants.RADIO },
    { text: "Critical care", image: criticalCare, id: departmentConstants.CC },
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
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Link
              component={RouterLink}
              to={`${
                otherInternalsIds.includes(service.id)
                  ? "department-internal/general"
                  : "department"
              }/${service.id || departmentConstants.OPTHOMOLOGY}`}
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
