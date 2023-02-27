// Importing UI elements and react elements
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

// Importing components
import GetAllProducts from "../api/AllProducts";

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
