import { Box, Divider, Typography, Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import av1 from "assets/images/testimonial/1.png";
import av2 from "assets/images/testimonial/2.png";
import av3 from "assets/images/testimonial/3.png";
import av4 from "assets/images/testimonial/4.png";

import gradient from "assets/images/testimonial/bg.png";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import "./testimonial.scss";

import quote from "assets/images/quote.svg";

const Testimonial = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const next = () => {
    sliderRef2.slickNext();
  };
  const previous = () => {
    sliderRef2.slickPrev();
  };

  return (
    <Box
      py={10}
      px={10}
      sx={{
        background: `url(${gradient}) no-repeat`,
        backgroundSize: "100% 100%",
      }}
    >
      <Box
        className="slider-container"
        textAlign={"center"}
        width="75%"
        mx="auto"
      >
        <Box textAlign={"center"} pb={5}>
          <Typography textAlign="center" variant="subHeader">
            See What Others Have To Say
          </Typography>
        </Box>
        <Slider
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
          arrows={false}
        >
          <Box textAlign={"center"}>
            <img
              src={quote}
              alt="quote"
              style={{ display: "inline-block", marginBottom: "1rem" }}
            />
            <Typography width="50%" margin="auto" fontSize={"1.25rem"}>
              Altruism is the practice of aiding individuals in a state of
              necessity, characterized by giving resources, finances, or one's
              own time and energy, devoid of any expectancy of recompense.
            </Typography>
          </Box>
          <Box textAlign={"center"}>
            <img
              src={quote}
              alt="quote"
              style={{ display: "inline-block", marginBottom: "1rem" }}
            />

            <Typography width="50%" margin="auto" fontSize={"1.25rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quisquam odit natus officia nesciunt quod excepturi,
              iusto qui numquam blanditiis tenetur facilis fugiat autem in ex
              corporis? Quo, consequuntur eaque!
            </Typography>
          </Box>
          <Box textAlign={"center"}>
            <img
              src={quote}
              alt="quote"
              style={{ display: "inline-block", marginBottom: "1rem" }}
            />

            <Typography width="50%" margin="auto" fontSize={"1.25rem"}>
              Altruism is the practice of aiding individuals in a state of
              necessity, characterized by giving resources, finances, or one's
              own time and energy, devoid of any expectancy of recompense.
            </Typography>
          </Box>
          <Box textAlign={"center"}>
            <img
              src={quote}
              alt="quote"
              style={{ display: "inline-block", marginBottom: "1rem" }}
            />

            <Typography width="50%" margin="auto" fontSize={"1.25rem"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              laborum sit corrupti nesciunt voluptate quidem libero provident
              temporibus doloremque, natus tempore aperiam quisquam dolorum
              delectus cumque debitis eius reprehenderit quod!
            </Typography>
          </Box>
        </Slider>
        <Divider sx={{ mb: 0, mt: 3 }} />
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={7}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          variableWidth={true}
          arrows={false}
          className="img-sec"
        >
          <Box mx={3}>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "5rem", height: "5rem" }}
              src={av1}
            />
            <Typography
              width={"5rem"}
              display={"none"}
              whiteSpace={"nowrap"}
              pt={2}
            >
              Smith
            </Typography>
          </Box>
          <Box mx={3}>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "5rem", height: "5rem" }}
              src={av2}
            />
            <Typography
              width={"5rem"}
              display={"none"}
              whiteSpace={"nowrap"}
              pt={2}
            >
              John Smith
            </Typography>
          </Box>
          <Box mx={3}>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "5rem", height: "5rem" }}
              src={av3}
            />
            <Typography
              width={"5rem"}
              display={"none"}
              whiteSpace={"nowrap"}
              pt={2}
            >
              Barry Allen
            </Typography>
          </Box>
          <Box mx={3}>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "5rem", height: "5rem" }}
              src={av4}
            />
            <Typography
              width={"5rem"}
              display={"none"}
              whiteSpace={"nowrap"}
              pt={2}
            >
              Bob
            </Typography>
          </Box>
        </Slider>
        <Box textAlign="center">
          <IconButton
            variant="contained"
            onClick={previous}
            size="large"
            color="primary"
            sx={{ fontSize: "2.5rem" }}
          >
            <ArrowCircleLeftOutlinedIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            variant="contained"
            onClick={next}
            size="large"
            color="primary"
            sx={{ fontSize: "2.5rem" }}
          >
            <ArrowCircleRightOutlinedIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
