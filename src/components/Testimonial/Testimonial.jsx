import { Box, Divider, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import gradient from "assets/images/testimonial/bg.png";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import "./testimonial.scss";

import quote from "assets/images/quote.svg";

import { data } from "./data";

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
          {data.map((item, i) => (
            <Box textAlign={"center"}>
              <img
                src={quote}
                alt="quote"
                key={i}
                style={{ display: "inline-block", marginBottom: "1rem" }}
              />
              <Typography width="50%" margin="auto" fontSize={"1.25rem"}>
                {item.feedback}
              </Typography>
              - {item.author}
            </Box>
          ))}
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
          {data.map((item, i) => (
            <Box mx={3} key={i}>
              {/* <Avatar
              alt="Remy Sharp"
              sx={{ width: "5rem", height: "5rem" }}
              src={av1}
            /> */}
              <Typography width={"5rem"} display={"none"} whiteSpace={"nowrap"}>
                {item.author}
              </Typography>
            </Box>
          ))}
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
