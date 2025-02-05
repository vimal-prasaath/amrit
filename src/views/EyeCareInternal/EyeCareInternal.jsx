import { Box, Typography } from "@mui/material";
import { Banner, Details } from "./components";
import { useParams } from "react-router";
import { departmentinternal } from "views/EyeCareDetails/internal-data";
import { Testimonial } from "components";
import { list as allList } from "views/EyeCareDetails/internal-data/doctors";
import { BookAppointmentStrip } from "components";

const EyeCareInternal = ({ doctorView }) => {
  const { id, departId } = useParams();
  const { internalData, list, listheader } = departmentinternal[departId] || {};
  const pageData = internalData?.find((item) => item.id === id) || {};

  const [label1, label2] = pageData?.label?.split("||").reverse() || [];

  return (
    <Box>
      <Box position={"relative"}>
        <Banner text={pageData.label} bannerImg={pageData?.banner} />

        {Boolean(pageData?.label) && (
          <Typography
            fontSize={{ md: "3.125rem", xs: "2.25rem" }}
            fontWeight={600}
            position="absolute"
            // color={"white"}
            sx={{
              top: "50%",
              transform: "translateY(-50%)",
              left: { md: "5rem", xs: "1rem" },
              // filter: "drop-shadow(2px 4px 6px black)",
            }}
          >
            <Typography
              component={"span"}
              fontSize={"2.50rem"}
              fontWeight={600}
              display={"block"}
            >
              {label2}
            </Typography>
            {label1}
          </Typography>
        )}
      </Box>
      <Box mb={{ md: "10rem", xs: "2.5rem" }}>
        <BookAppointmentStrip />
      </Box>
      <Details
        data={pageData.data}
        doctorView={doctorView}
        links={departId === "general" ? allList : list}
        departId={departId}
        img={pageData.img}
        listheader={listheader}
      />
      <Testimonial />
    </Box>
  );
};

export default EyeCareInternal;
