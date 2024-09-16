import { Box, Typography, Link } from "@mui/material";
import blog from "assets/images/background/blog-xl.png";
import internalReach from "assets/images/background/internal-reach.png";
import blogImg from "assets/images/background/blogImg.png";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { blogs } from "views/Blog/data";
import { useState } from "react";
import { BookAppointmentModel } from "components";

import img1 from "assets/images/blog/1.jpg";
import img2 from "assets/images/blog/2.jpg";
import img3 from "assets/images/blog/3.jpg";
import img4 from "assets/images/blog/4.jpg";

const BlogItem = ({ img, title }) => {
  return (
    <Box display="flex" mb={3} alignItems={{ xs: "center", md: "start" }}>
      <Box
        pr={3}
        minWidth={"8.75rem"}
        maxWidth={"8.75rem"}
        textAlign={{ xs: "center", md: "start" }}
      >
        <img
          src={img}
          alt="blog"
          width="100%"
          height={"100%"}
          style={{ objectFit: "cover", borderRadius: "0.5rem" }}
        />
      </Box>
      <Box>
        <Typography fontSize="0.85rem" fontWeight="bold" mb={2}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

const Details = () => {
  const { blogId } = useParams();
  const selectedBlog = blogs.find((item) => item.id === blogId);
  const [openModel, setOpenModel] = useState(false);
  const openPopup = () => setOpenModel(true);
  const closePopup = () => setOpenModel(false);
  return (
    <Box
      px={{ xs: 4, lg: 10 }}
      py={{ xs: 4, lg: 8 }}
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
    >
      <Box pr={{ xs: 0, lg: 5 }}>
        <img
          src={selectedBlog.img}
          alt="blog"
          width={"100%"}
          style={{ borderRadius: "1rem" }}
        />
        <Typography fontSize="2.75rem" fontWeight="bold" py={4}>
          {selectedBlog.header}
        </Typography>

        {selectedBlog.data?.map((item, i) => (
          <Box key={`data-${i}`}>
            <Typography
              color="#777"
              fontWeight={"bold"}
              variant="h6"
              // lineHeight="2"
              mb={3}
            >
              {item.subheader}
            </Typography>
            <Typography color="#777" variant="h6" mb={3}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        flexGrow={1}
        maxWidth={{ xs: "100%", lg: "24.5rem" }}
        minWidth={{ xs: "100%", lg: "24.5rem" }}
      >
        <Box bgcolor="#f4f4f4" px={3} pb={0.25} borderRadius="1rem" mb={3}>
          <Typography
            variant="body2"
            textTransform="uppercase"
            borderBottom={1}
            mx={-3}
            px={3}
            py={2}
            borderColor="#e8e8e8"
            fontWeight={600}
            mb={3}
          >
            Latest post
          </Typography>
          <Link
            component={RouterLink}
            to="/blog/1"
            textDecoration="none"
            color="common.black"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <BlogItem
              img={img1}
              title="Chennai’s Leading Endoscopic Thyroid Surgery at Amrit Hospital"
            />
          </Link>
          <Link
            component={RouterLink}
            to="/blog/2"
            textDecoration="none"
            color="common.black"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <BlogItem
              img={img2}
              title="The Importance of Regular Eye Check-Ups"
              text="The Importance of Regular Eye Check-Ups: How Amrit Hospital's Ophthalmology Department Ensures Clear Vision for Life"
            />
          </Link>
          <Link
            component={RouterLink}
            to="/blog/3"
            textDecoration="none"
            color="common.black"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <BlogItem
              img={img3}
              title="Navigating Multi-Specialty Healthcare"
              text="Navigating Multi-Specialty Healthcare: Why Amrit Hospital Is Your One-Stop Solution for All Medical Needs"
            />
          </Link>
          <Link
            component={RouterLink}
            to="/blog/4"
            textDecoration="none"
            color="common.black"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <BlogItem
              img={img4}
              title="Cataracts are one of the leading causes of vision impairment, particularly in older adults."
              text="Cataracts occur when the eye’s natural lens becomes cloudy, leading to blurred vision, difficulty with glare, and eventually, significant vision impairment. "
            />
          </Link>
        </Box>

        <Box
          order={{ xs: -1, md: 2 }}
          maxWidth={{ xs: "100%", md: "24.5rem" }}
          minWidth={{ xs: "100%", md: "24.5rem" }}
          position={"relative"}
        >
          <img
            src={internalReach}
            alt="internalReach"
            width="100%"
            onClick={openPopup}
            style={{ cursor: "pointer" }}
          />
          <Link
            to="tel:+919600711818"
            alignItems="center"
            component={RouterLink}
            sx={{
              textDecoration: "none",
              width: "100%",
              height: "30px",
              display: "block",
              position: "absolute",
              bottom: "33%",
              zIndex: 1,
            }}
            color={"common.black"}
          ></Link>
        </Box>
      </Box>
      {openModel && <BookAppointmentModel onClose={closePopup} />}
    </Box>
  );
};

export default Details;
