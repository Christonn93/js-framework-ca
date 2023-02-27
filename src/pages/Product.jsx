// Importing UI elements and react elements
import { Box } from "@mui/material";
import * as React from "react";
import SingleProduct from "../components/layout/SingleProduct";

const Product = () => {
  return (
    <Box p={4}>
        <h1>Product</h1>
        <SingleProduct />
    </Box>
);
}

export default Product