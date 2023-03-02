// Importing react elements
import * as React from "react";

// Importing mui items
import { Box, Grid } from "@mui/material";

// Importing components
import ErrorResponse from "../UI/ErrorResponse";
import LoadingAnimation from "../UI/LoadingAnimation";
import ProductCard from "../UI/ProductCards";
import ApiHook from "../../api/ApiHook";

function GetAllProducts() {
 // Fetching the data
 const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop");

 // Displaying loading div
 if (isLoading) {
  return <LoadingAnimation />;
 }

 // Displaying error for the user if something is wrong
 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 if (!data.map) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 // What is displaying
 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
   <Grid container spacing={{ xs: 1, md: 2, lg: 4 }} columns={15} justifyContent="center" p={5} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {data.map((product) => (
     <Grid item xs={2} sm={4} key={product.id}>
      <ProductCard
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
