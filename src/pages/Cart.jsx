// Importing UI elements and react elements
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
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
