// Importing react elements
import * as React from "react";
import { useEffect, useState } from "react";

// Importing mui items
import { Box, Grid, Alert, AlertTitle, Container } from "@mui/material";

// Importing components
import ProductCard from '../components/assets/ProductCards'

// Api url
const url = "https://api.noroff.dev/api/v1/online-shop";

const GetAllProducts = () => {
 const [product, setItem] = useState([]);

 // State for holding our loading state
 const [isLoading, setIsLoading] = useState(false);
 // State for holding our error state
 const [isError, setIsError] = useState(false);

 useEffect(() => {
  async function getData() {
   try {
    // Reset the error state in case there as an error previously
    setIsError(false);
    // Turn on the loading state each time we do an API call
    setIsLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setItem(json);
    // Clear the loading state once we've successfully got our data
    setIsLoading(false);
   } catch (error) {
    // Clear the loading state if we get an error and then
    // set our error state to true
    setIsLoading(false);
    setIsError(true);
   }
  }

  getData();
 }, []);

 if (isLoading) {
  return (
   <Box boxShadow="outline" p="6" rounded="md" bg="white" margin={5}>
    <Container className="loader">
     <div className="loader-wheel"></div>
     <div className="loader-text"></div>
    </Container>
   </Box>
  );
 }

 if (isError) {
  return (
   <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — <strong>check it out!</strong>
   </Alert>
  );
 }
 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
   <Grid container spacing={{ xs: 1, md: 2, lg: 4 }} columns={15} justifyContent="center" p={5} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {product.map((data) => (
     <Grid item xs={2} sm={4}>
      <ProductCard title={data.title} description={data.description} imageUrl={data.imageUrl} productPath={`/product/${data.id}`} discountPrice={data.discountedPrice} price={data.price} />
     </Grid>
    ))}
   </Grid>
  </Box>
 );
};

export default GetAllProducts;
