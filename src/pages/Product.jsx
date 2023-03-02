// Importing React components
import * as React from "react";

// Importing MUI components
import { Box } from "@mui/material";

// Importing custom components
import SingleProduct from "../components/layout/SingleProduct";

const Product = () => {
 return (
  <Box p={4}>
   <SingleProduct />
  </Box>
 );
};

export default Product;
