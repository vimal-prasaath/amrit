import { Box, Typography } from "@mui/material";
import { Blog, EyeCare, OurDoctors, Testimonial } from "components";
import { Banner, OurFacility } from "./components";

import { department } from "./data";
import { useParams } from "react-router";

const EyeCareDetails = () => {
  const { departmentId } = useParams();

  const departmentData = department[departmentId];
  const {
    banner,
    // about,
    facility,
    services,
    serviceHeader,
    bannerImg,
    // aboutImg,
    facilityImg,
    infoImg,
    info,
    bannerSize,
  } = departmentData;

  return (
    <Box>
      <Banner
        banner={banner}
        bannerImg={bannerImg}
        bannerSize={bannerSize || []}
      />
      {/* <About about={about} aboutImg={aboutImg} /> */}
      <OurFacility facility={facility} facilityImg={facilityImg} />

      {services?.length > 0 && (
        <EyeCare
          services={services}
          departmentId={departmentId}
          serviceHeader={serviceHeader}
        />
      )}
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
        <Box
          width={{ md: "50%", xs: "100%" }}
          px={{ md: 8, xs: 5 }}
          lineHeight={1}
        >
          <Typography
            fontSize={{ md: "2.5rem", xs: "1.75rem" }}
            textTransform={"uppercase"}
          >
            {info?.heder}
          </Typography>
          <Typography
            fontSize={{ md: "3rem", xs: "2rem" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          >
            {info?.subheader}
          </Typography>
          <Box width={{ md: "80%", xs: "100%" }} my={2}>
            <Box border={4} borderColor={"black"} textAlign={"center"}>
              <Box bgcolor="black" color="white" textAlign={"center"} py={0.5}>
                <Typography
                  fontSize={{ md: "2rem", xs: "1.75rem" }}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  {info?.point1}
                </Typography>
              </Box>
              <Box textAlign={"center"} py={0.5}>
                <Typography
                  fontSize={{ md: "2rem", xs: "1.75rem" }}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  {info?.point2}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <OurDoctors filterKey={departmentId} departmentPage />
      <Testimonial />
      <Blog />
    </Box>
  );
};

export default EyeCareDetails;
