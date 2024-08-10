import { Box } from "@mui/material";
import { Banner, Details } from "./components";
import { useParams } from "react-router";
import { departmentinternal } from "views/EyeCareDetails/internal-data";
import { Testimonial } from "components";

const EyeCareInternal = ({ doctorView }) => {
  const { id, departId } = useParams();
  const { internalData, list } = departmentinternal[departId];
  const pageData = internalData.find((item) => item.id === id);

  return (
    <Box>
      <Banner text={pageData.label} bannerImg={pageData?.banner} />
      <Details
        data={pageData.data}
        doctorView={doctorView}
        links={list}
        departId={departId}
      />
      <Testimonial />
    </Box>
  );
};

export default EyeCareInternal;
