import { Box, Typography, Link } from "@mui/material";
import internalReach from "assets/images/background/internal-reach.png";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { blogs } from "views/Blog/data";
import { useState } from "react";
import { BookAppointmentModel } from "components";

import img1 from "assets/images/blog/1.jpg";
import img2 from "assets/images/blog/2.jpg";
import img3 from "assets/images/blog/3.jpg";
import img4 from "assets/images/blog/4.jpg";

import img5 from "assets/images/blog/5.jpg";
import img6 from "assets/images/blog/6.jpg";
import img7 from "assets/images/blog/7.jpg";
import img8 from "assets/images/blog/8.jpg";

import img9 from "assets/images/blog/9.jpg";
import img10 from "assets/images/blog/10.jpg";
import img11 from "assets/images/blog/11.jpg";
import img12 from "assets/images/blog/12.jpg";
import img13 from "assets/images/blog/13.jpg";

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
            {item.text2 && (
              <Typography color="#777" variant="h6" mb={3}>
                {item.text2}
              </Typography>
            )}
            {item.text3 && (
              <Typography color="#777" variant="h6" mb={3}>
                {item.text3}
              </Typography>
            )}
            {item.text4 && (
              <Typography color="#777" variant="h6" mb={3}>
                {item.text4}
              </Typography>
            )}
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

          <Link
            component={RouterLink}
            to="/blog/5"
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
              img={img5}
              title="5 Cataract Surgery Side Effects & How to Recover"
            />
          </Link>

          <Link
            component={RouterLink}
            to="/blog/6"
            textDecoration="none"
            color="common.black"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <BlogItem img={img6} title="5 Best Foods for Eye Health" />
          </Link>

          <Link
            component={RouterLink}
            to="/blog/7"
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
              img={img7}
              title="Femto Laser Cataract Surgery: Revolutionizing Modern Cataract Treatment"
            />
          </Link>

          <Link
            component={RouterLink}
            to="/blog/8"
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
              img={img8}
              title="Post Cataract Surgery Precautions & Recovery"
            />
          </Link>
          <Link
            component={RouterLink}
            to="/blog/9"
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
              img={img9}
              title="5 Important Stages of Child Growth and Development"
            />
          </Link>
          <Link
            component={RouterLink}
            to="/blog/10"
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
              img={img10}
              title="10 Foods That Increase Fertility in Women"
            />
          </Link>

          <Link
            component={RouterLink}
            to="/blog/11"
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
              img={img11}
              title="Apple Cider Vinegar During Pregnancy: Good or Bad?"
            />
          </Link>

          <Link
            component={RouterLink}
            to="/blog/12"
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
              img={img12}
              title="Cosmetic Gynaecology: Everything You Need to Know"
            />
          </Link>

          <Link
            component={RouterLink}
            to="/blog/13"
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
              img={img13}
              title="Normal Delivery Tips: What to Do to Avoid a C-Section"
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
