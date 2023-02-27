// Importing react elements
import * as React from "react";

// Importing mui items
import { Box, Grid } from "@mui/material";

// Importing components
import ErrorResponse from "../utils/ErrorResponse";
import LoadingAnimation from "../utils/LoadingAnimation";
import ProductCard from "../assets/ProductCards";
import ApiHook from "../../api/ApiHook";

function GetAllProducts() {
 const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop");

 if (isLoading) {
  return <LoadingAnimation />;
 }

 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
   <Grid container spacing={{ xs: 1, md: 2, lg: 4 }} columns={15} justifyContent="center" p={5} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {data.map((product) => (
     <Grid item xs={2} sm={4}>
      <ProductCard
        key={product.toString()}
       title={product.title}
       description={product.description}
       imageUrl={product.imageUrl}
       productPath={`/product/${product.id}`}
       discountPrice={product.discountedPrice}
       price={product.price}
      />
     </Grid>
    ))}
   </Grid>
  </Box>
 );
}

export default GetAllProducts;
