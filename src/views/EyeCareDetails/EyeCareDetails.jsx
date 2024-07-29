import { Box, Typography } from "@mui/material";
import { About, Blog, EyeCare, OurDoctors, Testimonial } from "components";
import { Banner, OurFacility } from "./components";

import { department } from "./data";
import { useParams } from "react-router";

const EyeCareDetails = () => {
  const { departmentId } = useParams();

  const departmentData = department[departmentId];
  const {
    banner,
    about,
    facility,
    services,
    serviceHeader,
    bannerImg,
    aboutImg,
    facilityImg,
    infoImg,
    info,
  } = departmentData;
  return (
    <Box>
      <Banner banner={banner} bannerImg={bannerImg} />
      <About about={about} aboutImg={aboutImg} />
      <OurFacility facility={facility} facilityImg={facilityImg} />

      <EyeCare
        services={services}
        departmentId={departmentId}
        serviceHeader={serviceHeader}
      />
      <Box
        mb={-1.25}
        minHeight="43.75rem"
        sx={{
          background: `url(${infoImg}) no-repeat`,
          backgroundSize: "cover",
        }}
        display={"flex"}
        alignItems={"center"}
      >
        <Box width="50%" px={8} lineHeight={1}>
          <Typography fontSize={"2.5rem"} textTransform={"uppercase"}>
            {info?.heder}
          </Typography>
          <Typography
            fontSize={"3rem"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          >
            {info?.subheader}
          </Typography>
          <Box width="80%" my={2}>
            <Box border={4} borderColor={"black"} textAlign={"center"}>
              <Box bgcolor="black" color="white" textAlign={"center"} py={0.5}>
                <Typography
                  fontSize={"2rem"}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  {info?.point1}
                </Typography>
              </Box>
              <Box textAlign={"center"} py={0.5}>
                <Typography
                  fontSize={"2rem"}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  {info?.point2}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography></Typography>
        </Box>
      </Box>
      <OurDoctors />
      <Testimonial />
      <Blog />
    </Box>
  );
};

export default EyeCareDetails;
