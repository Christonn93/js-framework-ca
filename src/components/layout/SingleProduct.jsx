// Importing react elements
import * as React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Importing mui items
import { Box, Grid, Button, ButtonGroup, Container, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Importing components
import ErrorResponse from "../UI/ErrorResponse";
import LoadingAnimation from "../UI/LoadingAnimation";
import ApiHook from "../../api/ApiHook";
import PriceDisplay from "../UI/PriceDisplay";
import DisplayReview from "../UI/DisplayReview";

const Line = styled.hr`
 width: 100%;
 height: 5px;
 border-style: solid;
 border-color: hsla(0, 0%, 75%, 0.9);
 border-width: 1px 0 0 0;
`;

const SingleProduct = () => {
 let { id } = useParams();
 const { data, isLoading, isError } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);

 console.log(data);

 // Setting variables for displaying data
 const price = PriceDisplay(data);
 const review = DisplayReview(data);


 // Displaying loading div
 if (isLoading) {
  return <LoadingAnimation />;
 }

 // Displaying error for the user if something is wrong
 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 if (data.map) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 // What is displaying
 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
   <Container>
    <Grid container spacing={2}>
     <Grid item xs={12}>
      <Typography variant="h2">{data.title}</Typography>
     <Line />
     <Typography variant="subtitle2">Category: {data.tags.join(', ')}</Typography>
     </Grid>
     <Grid item xs={6}>
      <Grid container direction="column" spacing={2}>
       <Grid item marginBottom={3}>
        <Typography variant="h5" marginBottom={2}>
         Product description:
        </Typography>
        <Line />
        <Typography variant="body2">{data.description}</Typography>
        <Typography variant="body2" marginTop={2}>
         Lorem ipsum dolor sit amet, nec ne delectus signiferumque. Ei pri porro singulis, no quot saperet facilisis sed, no instructior intellegebat usu. Id mei ullum graece oportere, vis at
         expetendis signiferumque, sint volumus mel cu. Quodsi senserit aliquando ne pri, vim gubergren percipitur ei. (added this to fill out the page a bit more so the design would work good)
        </Typography>
       </Grid>
       <Grid item>
        <Grid container alignItems="center" justifyContent={"space-between"} spacing={1} marginBottom={2}>
         <Grid item>{price}</Grid>
         <Grid item>
          <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
           <Button variant="contained" color="primary">
            Add to cart
            <AddShoppingCartOutlinedIcon />
           </Button>

           <Button variant="outlined" color="primary">
            <FavoriteIcon />
           </Button>
          </ButtonGroup>
         </Grid>
        </Grid>
       </Grid>
      </Grid>
     </Grid>

     <Grid item xs={6}>
      <Grid container direction="column" spacing={2} alignContent="center">
       <Grid item>
        <img src={data.imageUrl} alt={data.imageUrl} loading="lazy" width={"300px"} className="product-image" />
       </Grid>
      </Grid>
     </Grid>
     <Line />
     <Grid item xs={12}>
      <Grid item xs={12}>
       <Typography variant="h4">Reviews</Typography>
      </Grid>
      <Grid item xs={12}>
       {review}
      </Grid>
     </Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default SingleProduct;
