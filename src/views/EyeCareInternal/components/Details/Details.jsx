import { VerticalBtnGroup, OurDoctors } from "components";
import { Box, Typography, ToggleButtonGroup } from "@mui/material";
import internalImg from "assets/images/background/internal-img.png";
import internalContact from "assets/images/background/internal-contact.png";
import internalReach from "assets/images/background/internal-reach.png";
import { ToggleBtn } from "./ToggleBtn.styled.js";
import { useState } from "react";
import check from "assets/images/check.svg";
import { list } from "views/EyeCareDetails/internal-data/otherInternal";

const Details = ({ doctorView, data, links, departId, img, listheader }) => {
  const [view, setView] = useState(doctorView ? 2 : 1);

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  const overviewContent = data?.map((item, index) => (
    <Box key={index + "section"}>
      <Typography
        fontSize={index === 0 ? "2.75rem" : "2.25rem"}
        fontWeight="bold"
        mt={3}
        mb={1}
      >
        {item.header}
      </Typography>
      {item?.content && (
        <Typography color="#777" variant="h6" lineHeight="2">
          {item.content}
        </Typography>
      )}
      {item?.points?.map((point, idex) => (
        <Typography
          key={idex + index + "section"}
          color="#777"
          variant="h6"
          lineHeight="2"
        >
          {" "}
          <img src={check} alt="bullet" style={{ marginRight: "0.5rem" }} />
          {point.split(":")?.map((text, i) => (
            <Typography
              fontWeight={i === 0 ? "bold" : "normal"}
              key={idex + index + i + "section"}
              component={"span"}
            >
              {text} {point.split(":").length > 1 && i === 0 ? ":" : ""}
            </Typography>
          ))}
        </Typography>
      ))}
      {item.summary && (
        <Typography color="#777" variant="h6" lineHeight="2" mt={2}>
          {item.summary}
        </Typography>
      )}
      {index === 0 && (
        <Box py={4}>
          <img src={img || internalImg} alt="img" width="100%" />
        </Box>
      )}
    </Box>
  ));

  const doctors = <OurDoctors detailView />;

  return (
    <Box
      px={{ md: 10, xs: 5 }}
      py={{ md: 5, xs: 2 }}
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
    >
      <Box order={{ xs: 2, md: 1 }}>
        <VerticalBtnGroup
          links={doctorView ? list : links}
          departId={doctorView ? "general" : departId}
          listheader={doctorView ? "List of Doctors" : listheader}
        />
        <Box
          display={{ md: "block", xs: "none" }}
          py={4}
          maxWidth="24.5rem"
          minWidth="24.5rem"
        >
          <img src={internalReach} alt="internalReach" width="100%" />
        </Box>
      </Box>
      <Box pl={{ md: 5, xs: 0 }} flexGrow={1} order={{ xs: 1, md: 2 }}>
        {!doctorView && (
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleChange}
            sx={{ pt: 2 }}
          >
            <ToggleBtn value={1}>Overview</ToggleBtn>
            <ToggleBtn value={2}>Our Doctors</ToggleBtn>
          </ToggleButtonGroup>
        )}
        {view === 1 ? overviewContent : doctors}
        {view === 1 && (
          <Box py={4}>
            <img src={internalContact} alt="intrnal" width="100%" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Details;
