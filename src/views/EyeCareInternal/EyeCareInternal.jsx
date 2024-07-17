import { Box } from "@mui/material";
import { Banner, Details } from "./components";
import { useParams } from "react-router";
import { internalData, opthomology } from "views/EyeCareDetails/opthomology";

const EyeCareInternal = ({ doctorView }) => {
  const { id } = useParams();

  const pageData = internalData.find((item) => item.id === id);

  return (
    <Box>
      <Banner text={pageData.label} />
      <Details
        data={pageData.data}
        doctorView={doctorView}
        links={opthomology}
      />
    </Box>
  );
};

export default EyeCareInternal;
