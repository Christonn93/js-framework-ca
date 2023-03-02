// Importing react elements
import React from "react";
import styled from "styled-components";

// Importing MUI components
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

// Importing components
import GetAllProducts from "../components/layout/AllProducts";

const Line = styled.hr`
 width: 100%;
 height: 5px;
 border-style: solid;
 border-color: hsla(0, 0%, 75%, 0.9);
 border-width: 1px 0 0 0;
`;

const Home = () => {
 return (
  <Container maxWidth="lg">
   <Box p={4}>
    <Typography variant="h1" align="center">
     Welcome to Store Online
    </Typography>
    <Line />
    <Typography variant="body1" align="center">
     Welcome to our online store! We're excited to offer you a wide variety of high-quality products at competitive prices. Whether you're looking for the latest electronics, trendy fashion, or unique
     home decor, we have something for everyone.
    </Typography>
    <Typography variant="body1" align="center">
     Our user-friendly platform is designed to make your shopping experience as smooth and convenient as possible, with easy navigation and secure checkout. Plus, our knowledgeable and friendly
     customer service team is always ready to assist you with any questions or concerns you may have. So go ahead and browse our extensive selection of products, and treat yourself to something
     special today!
    </Typography>
    <Box sx={{ flexGrow: 1 }} m={5}>
     <GetAllProducts />
    </Box>
   </Box>
  </Container>
 );
};

export default Home;
