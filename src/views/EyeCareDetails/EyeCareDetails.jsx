import { Box } from "@mui/material";
import { About, Blog, EyeCare, OurDoctors } from "components";
import { Banner, OurFacility } from "./components";
import ai from "assets/images/background/ai.png";

const EyeCareDetails = () => {
  return (
    <Box>
      <Banner />
      <About />
      <OurFacility />

      <EyeCare />
      <Box mb={-1.25}>
        <img src={ai} alt="ai surgery" width="100%" />
      </Box>
      <OurDoctors />
      <Blog />
    </Box>
  );
};

export default EyeCareDetails;
