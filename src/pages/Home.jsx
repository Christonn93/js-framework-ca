// Importing react elements
import React from "react";

// Importing MUI components
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

// Importing components
import GetAllProducts from "../components/layout/AllProducts";

const Home = () => {
 return (
  <Box p={4}>
   <Container>
    <Typography variant="h1">Welcome to Store Online</Typography>
    <Box sx={{ flexGrow: 1 }} m={5}>
     <GetAllProducts />
    </Box>
   </Container>
  </Box>
 );
};

export default Home;
