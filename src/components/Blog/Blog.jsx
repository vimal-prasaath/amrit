import { Box, Typography, Button, Link } from "@mui/material";
import blogImg from "assets/images/background/blogImg.png";
import { Link as RouterLink } from "react-router-dom";

const DetailedBlog = () => {
  return (
    <Box>
      <Box pr={3}>
        <img src={blogImg} alt="blog" width="100%" />
      </Box>
      <Typography fontSize="1.875rem" fontWeight="bold" mt={2}>
        Lorem Ipsum has been the industry's standard dummy text ever since
      </Typography>
      <Typography variant="body2">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type
      </Typography>
    </Box>
  );
};

const BlogItem = () => {
  return (
    <Box display="flex" mb={3}>
      <Box pr={3} minWidth={"18.75rem"} maxWidth={"18.75rem"}>
        <img src={blogImg} alt="blog" width="100%" />
      </Box>
      <Box>
        <Typography fontSize="1.25rem" fontWeight="bold" my={2}>
          Lorem Ipsum has been the industry's standard dummy text ever since
        </Typography>
        <Typography variant="body1">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type
        </Typography>
      </Box>
    </Box>
  );
};

const Blog = () => {
  return (
    <Box py={10} px={18} bgcolor="#f6f6f6">
      <Typography
        fontSize={"3.125rem"}
        fontWeight="bold"
        mb={6}
        textAlign="center"
      >
        Latest Blog & News
      </Typography>
      <Box display="flex">
        <Box width="50%" px={2}>
          <DetailedBlog />
        </Box>
        <Box width="50%" px={2}>
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </Box>
      </Box>
      <Box textAlign="center" pt={3}>
        <Link
          component={RouterLink}
          to="/blog"
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
