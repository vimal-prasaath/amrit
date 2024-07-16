import { Box, Typography } from "@mui/material";
import blog from "assets/images/background/blog-xl.png";
import internalReach from "assets/images/background/internal-reach.png";
import blogImg from "assets/images/background/blogImg.png";

const BlogItem = () => {
  return (
    <Box display="flex" mb={3}>
      <Box pr={3} minWidth={"8.75rem"} maxWidth={"8.75rem"}>
        <img src={blogImg} alt="blog" width="100%" />
      </Box>
      <Box>
        <Typography fontWeight="bold" my={0}>
          Lorem Ipsum has been the
        </Typography>
        <Typography variant="body1">
          Lorem Ipsum has been the industry's
        </Typography>
      </Box>
    </Box>
  );
};

const Details = () => {
  return (
    <Box px={10} py={8} display="flex">
      <Box pr={5}>
        <img
          src={blog}
          alt="blog"
          width={"100%"}
          style={{ borderRadius: "1rem" }}
        />
        <Typography fontSize="2.75rem" fontWeight="bold" py={4}>
          Lorem Ipsum has been the industry's standard dummy text ever since
        </Typography>
        <Typography color="#777" variant="h6" lineHeight="2" mb={3}>
          Lorem ipsum dolor sit amet consectur adipisicing elit sed do eiusmod
          tempor incidunt labore dolore magna aliqua enim minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. duis aute irure dolor in reprehend erit in voluptate velit
          esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat
          cupid atat non proident sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium totam rem aper i am eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt Neque porro quisquam est qui
          dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia
          non numquam eius mod
        </Typography>

        <Typography color="#777" variant="h6" lineHeight="2" mb={3}>
          Lorem ipsum dolor sit amet consectur adipisicing elit sed do eiusmod
          tempor incidunt labore dolore magna aliqua enim minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. duis aute irure dolor in reprehend erit in voluptate velit
          esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat
          cupid atat non proident sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium totam rem aper i am eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt Neque porro quisquam est qui
          dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia
          non numquam eius mod
        </Typography>

        <Typography color="#777" variant="h6" lineHeight="2" mb={3}>
          Lorem ipsum dolor sit amet consectur adipisicing elit sed do eiusmod
          tempor incidunt labore dolore magna aliqua enim minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. duis aute irure dolor in reprehend erit in voluptate velit
          esse cillum dolore fugiat nulla pariatur.
        </Typography>
      </Box>

      <Box flexGrow={1} maxWidth="24.5rem" minWidth="24.5rem">
        <Box bgcolor="#f4f4f4" px={3} pb={0.25} borderRadius="1rem">
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
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </Box>
        <Box py={4} maxWidth="24.5rem" minWidth="24.5rem">
          <img src={internalReach} alt="internalReach" width="100%" />
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
