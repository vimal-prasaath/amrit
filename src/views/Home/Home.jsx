import { Box } from "@mui/material";

import { Banner, JoinUs, OurDoctors, OurServices } from "components";

import { WhyAmrit, OurExcellence, OurFacility } from "./components";

const Home = () => {
  return (
    <Box>
      <Banner />
      <OurServices />
      <OurFacility />
      <WhyAmrit />
      <OurExcellence />
      <OurDoctors />
      <JoinUs />
    </Box>
  );
};

export default Home;
