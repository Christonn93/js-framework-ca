// Importing react elements
import * as React from "react";
import { useParams } from "react-router-dom";

// Importing mui items
import { Box, IconButton, Stack, Tooltip, Button } from "@mui/material";
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

 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
   <h1>{data.title}</h1>
   <p>{data.description}</p>
   <span>{data.price}</span>
   <br />
   <span>{data.rating}</span>
   <br />
   <img src={data.imageUrl} />
   <Tooltip title="Add to cart">
    <IconButton color="success">
     <AddShoppingCartOutlinedIcon />
    </IconButton>
   </Tooltip>
  </Box>
 );
};

export default SingleProduct;
