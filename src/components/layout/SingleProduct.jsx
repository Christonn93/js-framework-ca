// Importing react elements
import * as React from "react";

// Importing mui items
import { Box } from "@mui/material";

// Importing components
import ErrorResponse from "../utils/ErrorResponse";
import LoadingAnimation from "../utils/LoadingAnimation";
import ApiHook from "../../api/ApiHook";

const SingleProduct = () => {
 const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop");

 if (isLoading) {
  return <LoadingAnimation />;
 }

 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

console.log(data)

 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
  </Box>
 );
}

export default SingleProduct
