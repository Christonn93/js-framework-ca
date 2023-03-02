// Importing react components
import React from "react";

// Importing MUI components
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Cart = () => {
 return (
  <Container>
   <Box p={4}>
    <Typography variant="h1">Your cart</Typography>
    <Box></Box>
    <form>
     <Button variant="contained">Purchase</Button>
    </form>
   </Box>
  </Container>
 );
};

export default Cart;
