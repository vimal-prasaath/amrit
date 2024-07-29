import { Box } from "@mui/material";
import { About, Blog, EyeCare, OurDoctors } from "components";
import { Banner, OurFacility } from "./components";
import ai from "assets/images/background/ai.png";

import { department } from "./data";
import { useParams } from "react-router";

const EyeCareDetails = () => {
  const { departmentId } = useParams();

  const departmentData = department[departmentId];
  const { banner, about, facility, services, serviceHeader } = departmentData;
  return (
    <Box>
      <Banner banner={banner} />
      <About about={about} />
      <OurFacility facility={facility} />

      <EyeCare
        services={services}
        departmentId={departmentId}
        serviceHeader={serviceHeader}
      />
      <Box mb={-1.25}>
        <img src={ai} alt="ai surgery" width="100%" />
      </Box>
      <OurDoctors />
      <Blog />
    </Box>
  );
};

export default EyeCareDetails;
