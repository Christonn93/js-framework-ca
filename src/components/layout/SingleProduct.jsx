// Importing react elements
import * as React from "react";
import { useParams } from "react-router-dom";

// Importing mui items
import { Box, Grid, Button, Container, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Importing components
import ErrorResponse from "../UI/ErrorResponse";
import LoadingAnimation from "../UI/LoadingAnimation";
import ApiHook from "../../api/ApiHook";
import PriceDisplay from "../UI/PriceDisplay";
import ReviewDisplay from "../UI/ReviewDisplay";

const displayReview = (data) => {
 const review = data.reviews;

 console.log(review);

 if (review.length >= 1) {
  return (
   <>
    {review.map((index) => (
     <ReviewDisplay key={index.id} name={index.username} rating={index.rating} body={index.description} />
    ))}
   </>
  );
 } else {
  return (
   <>
    <Typography variant="body1">There is no reviews on this product</Typography>
   </>
  );
 }
};

const SingleProduct = () => {
 let { id } = useParams();
 const { data, isLoading, isError } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);

 // Displaying loading div
 if (isLoading) {
  return <LoadingAnimation />;
 }

 // Displaying error for the user if something is wrong
 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 // Setting variables for displaying data
 const price = PriceDisplay(data);

 // What is displaying
 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
   <Container>
    <Grid container spacing={2}>
     <Grid item xs={12}>
      <Typography variant="h2">{data.title}</Typography>
     </Grid>
     <Grid item xs={6}>
      <Grid container direction="column" spacing={2}>
       <Grid item>
        <img src={data.imageUrl} alt={data.imageUrl} loading="lazy" width={"300px"} />
       </Grid>
      </Grid>
     </Grid>
     <Grid item xs={6}>
      <Grid container direction="column" spacing={2}>
       <Grid item marginBottom={3}>
        <Typography variant="h4" marginBottom={2}>
         Description:
        </Typography>
        <Typography variant="body1">{data.description}</Typography>
        <Typography variant="body1" marginTop={2}>
         Lorem ipsum dolor sit amet, nec ne delectus signiferumque. Ei pri porro singulis, no quot saperet facilisis sed, no instructior intellegebat usu. Id mei ullum graece oportere, vis at
         expetendis signiferumque, sint volumus mel cu. Quodsi senserit aliquando ne pri, vim gubergren percipitur ei. (added this to fill out the page a bit more so the design would work good)
        </Typography>
       </Grid>
       <Grid item>
        <Grid container alignItems="center" spacing={2}>
         <Grid item>{price}</Grid>
         <Grid item>
          <Button variant="contained" color="primary">
           <AddShoppingCartOutlinedIcon />
          </Button>
         </Grid>
         <Grid item>
          <Button variant="outlined" color="primary">
           <FavoriteIcon />
          </Button>
         </Grid>
        </Grid>
       </Grid>
      </Grid>
     </Grid>
     <Grid item xs={12}>
      <Grid item xs={12}>
       <Typography variant="h4">Reviews</Typography>
      </Grid>
      <Grid item xs={12}>
        {displayReview(data)}
      </Grid>
     </Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default SingleProduct;
