// Importing react elements
import * as React from "react";

// Importing mui items
import Carousel from "react-material-ui-carousel";
import { Grid } from "@mui/material";

// Importing components
import ProductCard from "./ProductCards";

const Cards = (data) => {
 return (
  <Carousel>
   {data.map((product) => (
    <Grid item xs={2} sm={4}>
     <ProductCard
      key={product.id}
      title={product.title}
      description={product.description}
      imageUrl={product.imageUrl}
      productPath={`/product/${product.id}`}
      discountPrice={product.discountedPrice}
      price={product.price}
     />
    </Grid>
   ))}
  </Carousel>
 );
};

export default Cards;
