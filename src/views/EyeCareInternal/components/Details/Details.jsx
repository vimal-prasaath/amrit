import { VerticalBtnGroup, OurDoctors } from "components";
import { Box, Typography, ToggleButtonGroup } from "@mui/material";
import internalImg from "assets/images/background/internal-img.png";
import internalContact from "assets/images/background/internal-contact.png";
import internalReach from "assets/images/background/internal-reach.png";
import { ToggleBtn } from "./ToggleBtn.styled.js";
import { useState } from "react";

const Details = ({ doctorView }) => {
  const [view, setView] = useState(doctorView ? 2 : 1);

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  const overview = (
    <>
      <Typography fontSize="2.75rem" fontWeight="bold" mb={3}>
        SMILE (Small Incision Lenticule Extraction) Eye Surgery for Vision
        Correction
      </Typography>
      <Typography color="#777" variant="h6" lineHeight="2">
        Lorem ipsum dolor sit amet consectur adipisicing elit sed do eiusmod
        tempor incidunt labore dolore magna aliqua enim minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. duis aute irure dolor in reprehend erit in voluptate velit
        esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupid
        atat non proident sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aper i am eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum
        quia dolor sit amet consectetur adipisci velit sed quia non numquam eius
        mod
      </Typography>
      <Box py={4}>
        <img src={internalImg} alt="img" width="100%" />
      </Box>
      <Typography fontSize="2.25rem" fontWeight="bold" mb={3}>
        Eye conditions that can be treated with SMILE surgery
      </Typography>
      <Typography color="#777" variant="h6" lineHeight="2" mb={3}>
        Lorem ipsum dolor sit amet consectur adipisicing elit sed do eiusmod
        tempor incidunt labore dolore magna aliqua enim minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. duis aute irure dolor in reprehend erit in voluptate velit
        esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupid
        atat non proident sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aper i am eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum
        quia dolor sit amet consectetur adipisci velit sed quia non numquam eius
        mod
      </Typography>

      <Typography fontSize="2.25rem" fontWeight="bold" mb={3}>
        How safe is the SMILE procedure?
      </Typography>
      <Typography color="#777" variant="h6" lineHeight="2" mb={3}>
        Lorem ipsum dolor sit amet consectur adipisicing elit sed do eiusmod
        tempor incidunt labore dolore magna aliqua enim minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. duis aute irure dolor in reprehend erit in voluptate velit
        esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupid
        atat non proident sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aper i am eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum
        quia dolor sit amet consectetur adipisci velit sed quia non numquam eius
        mod
      </Typography>
    </>
  );

  const doctors = <OurDoctors detailView />;

  return (
    <Box px={10} py={5} display="flex">
      <Box>
        <VerticalBtnGroup />
        <Box py={4} maxWidth="24.5rem" minWidth="24.5rem">
          <img src={internalReach} alt="internalReach" width="100%" />
        </Box>
      </Box>
      <Box pl={5} flexGrow={1}>
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
        {view === 1 ? overview : doctors}
        <Box py={4}>
          <img src={internalContact} alt="intrnal" width="100%" />
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
