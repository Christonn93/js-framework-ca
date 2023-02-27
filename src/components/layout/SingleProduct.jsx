// Importing react elements
import * as React from "react";
import { useParams } from "react-router-dom";

// Importing mui items
import { Box, IconButton, Grid, Tooltip, Button, Container } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

// Importing components
import ErrorResponse from "../utils/ErrorResponse";
import LoadingAnimation from "../utils/LoadingAnimation";
import ApiHook from "../../api/ApiHook";

const SingleProduct = () => {
 let { id } = useParams();
 const { data, isLoading, isError } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);

 if (isLoading) {
  return <LoadingAnimation />;
 }

 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 console.log(data);

 let num1 = Number(data.discountedPrice) / 100;
 let num2 = Number(data.price);
 let totalValue = num1 - num1 * num2;
 console.log(totalValue.toFixed(2));

 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
  <Container>
   <Grid container spacing={2}>
    <Grid item xs={4}>
     <h1>{data.title}</h1>
     <Box boxShadow={6} width={"300px"}>
      <img src={data.imageUrl} alt={data.imageUrl} loading="lazy" width={"100%"} />
     </Box>
    </Grid>
    <Grid item xs={8}>
     <p>{data.description}</p>
     <span>{data.price}</span>
     <br />
     <span>{data.rating}</span>
     <br />
    </Grid>
    <Grid item xs={4}>
     <Tooltip title="Add to cart">
      <Button>
       <IconButton color="success">
        <AddShoppingCartOutlinedIcon />
       </IconButton>
      </Button>
     </Tooltip>
    </Grid>
   </Grid>
   </Container>
  </Box>
 );
};

export default SingleProduct;
