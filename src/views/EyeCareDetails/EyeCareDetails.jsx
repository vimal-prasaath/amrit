import { Box } from "@mui/material";
import { About, Blog, EyeCare, OurDoctors } from "components";
import { Banner, OurFacility } from "./components";
import ai from "assets/images/background/ai.png";

import { data } from "./data";

const EyeCareDetails = () => {
  const eyecare = data[0];
  const { banner, about, facility, services } = eyecare;
  return (
    <Box>
      <Banner banner={banner} />
      <About about={about} />
      <OurFacility facility={facility} />

      <EyeCare services={services} />
      <Box mb={-1.25}>
        <img src={ai} alt="ai surgery" width="100%" />
      </Box>
      <OurDoctors />
      <Blog />
    </Box>
  );
};

export default EyeCareDetails;
