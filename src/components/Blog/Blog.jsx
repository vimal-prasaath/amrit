import { Box, Typography, Button, Link } from "@mui/material";
import img1 from "assets/images/blog/1.jpg";
import img2 from "assets/images/blog/2.jpg";
import img3 from "assets/images/blog/3.jpg";
import img4 from "assets/images/blog/4.jpg";

import { Link as RouterLink } from "react-router-dom";

const DetailedBlog = () => {
  return (
    <Box>
      <Box pr={3}>
        <img src={img1} alt="blog" width="100%" />
      </Box>
      <Typography fontSize="1.875rem" fontWeight="bold" mt={2}>
        Chennai’s Leading Endoscopic Thyroid Surgery at Amrit Hospital
      </Typography>
      <Typography variant="body2">
        Thyroid surgery has traditionally involved a visible neck incision,
        which can leave patients with noticeable scars and longer recovery
        times. However, Amrit Hospital in Chennai is changing the game by being
        the only hospital in the city to offer thyroid removal through
        endoscopy.
      </Typography>
    </Box>
  );
};

const BlogItem = ({ img, title, text }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      mb={3}
      alignItems={{ xs: "center", md: "start" }}
    >
      <Box
        pr={3}
        minWidth={"18.75rem"}
        maxWidth={"18.75rem"}
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
        <Typography fontSize="1.25rem" fontWeight="bold" mb={2}>
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

const Blog = () => {
  return (
    <Box py={{ md: 10, xs: 4 }} px={{ md: 18, xs: 4 }} bgcolor="#f6f6f6">
      <Typography
        fontSize={"3.125rem"}
        fontWeight="bold"
        mb={6}
        textAlign="center"
      >
        Latest Blog & News
      </Typography>
      <Box display="flex" flexWrap={"wrap"}>
        <Box width={{ lg: "50%", xs: "100%" }} p={2}>
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
            <DetailedBlog />
          </Link>
        </Box>
        <Box width={{ lg: "50%", xs: "100%" }} p={2}>
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
      </Box>
      <Box textAlign="center" pt={3}>
        <Link
          component={RouterLink}
          to="/blog/1"
          sx={{ textDecoration: "none" }}
          color={"common.black"}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2.5, py: 1.25, minWidth: "12.5rem" }}
          >
            Read More
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Blog;
