// Importing react elements
import * as React from "react";
import { useParams } from "react-router-dom";

// Importing mui items
import { Box, Grid, Button, Container, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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
 let priceDisplay;

 const discountProduct = (
  <ul className="price-display">
   <li>
    <p>% off</p>
   </li>
   <li>
    <p><AttachMoneyIcon fontSize="20px"/>{data.discountedPrice}</p>
   </li>
   <li>
    <p className="price-off"><AttachMoneyIcon fontSize="20px"/>{data.price}</p>
   </li>
  </ul>
 );

 const noDiscountProduct = <p> <AttachMoneyIcon fontSize="20px"/> {data.price}</p>;

 if (data.discountPrice >= data.price) {
  return priceDisplay === discountProduct;
 }

 if (data.discountPrice <= data.price) {
  return priceDisplay === noDiscountProduct;
 }

 return (
  <Box sx={{ flexGrow: 1 }} m={5}>
   <Container>
    <Grid container spacing={2}>
     <Grid item xs={6}>
      <Grid container direction="column" spacing={2}>
       <Grid item>
        <Typography variant="h2">{data.title}</Typography>
       </Grid>
       <Grid item>
        <img src={data.imageUrl} alt={data.imageUrl} loading="lazy" width={"300px"} />
       </Grid>
      </Grid>
     </Grid>
     <Grid item xs={6}>
      <Grid container direction="column" spacing={2}>
       <Grid item>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body1">{data.description}</Typography>
        <Typography variant="body1" marginTop={2}>
         Lorem ipsum dolor sit amet, nec ne delectus signiferumque. Ei pri porro singulis, no quot saperet facilisis sed, no instructior intellegebat usu. Id mei ullum graece oportere, vis at
         expetendis signiferumque, sint volumus mel cu. Quodsi senserit aliquando ne pri, vim gubergren percipitur ei.
        </Typography>
       </Grid>
       <Grid item>
        <Grid container alignItems="center" spacing={2}>
         <Grid item>{priceDisplay}</Grid>
         <Grid item>
          <Button variant="contained" color="primary">
           <AddShoppingCartOutlinedIcon />
           Add to cart
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
    </Grid>
   </Container>
  </Box>
 );
};

export default SingleProduct;
