import { Box } from "@mui/material";

import {
  Banner,
  // JoinUs,
  OurDoctors,
  OurServices,
  Testimonial,
} from "components";

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
      {/* <JoinUs /> */}
      <Testimonial />
    </Box>
  );
};

export default Home;
