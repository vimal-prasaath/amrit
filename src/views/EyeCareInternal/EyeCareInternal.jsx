import { Box } from "@mui/material";
import { Banner, Details } from "./components";

const EyeCareInternal = ({ doctorView }) => {
  return (
    <Box>
      <Banner />
      <Details doctorView={doctorView} />
    </Box>
  );
};

export default EyeCareInternal;
