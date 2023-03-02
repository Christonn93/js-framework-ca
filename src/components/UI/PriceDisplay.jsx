import React from "react";
import styled from "styled-components";

// Importing mui items
import { Chip, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const P = styled.p`
 margin: 0;
 padding: 0;
 font-weight: bold;
`;

const Old = styled.p`
 margin: 0;
 padding: 0;
 font-size: small;
 color: red;
`;

const Small = styled.p`
 margin: 0;
 padding: 0;
 font-size: small;
`;

const PriceDisplay = (data) => {
 // Calculating discount price
 const fullPrice = data.price;
 const reducedPrice = data.discountedPrice;
 const discountPercentage = Math.trunc(100 * Math.abs((fullPrice - reducedPrice) / ((fullPrice + reducedPrice) / 2)));

 // Display if there is a discount price
 const discountProduct = (
  <Box>
   <Old>
    <del>
     {data.price}
     <AttachMoneyIcon fontSize="20px" />
    </del>
    <span>
     <Chip label={discountPercentage + "% off"} color="success" size="small" variant="outlined"></Chip>
    </span>
   </Old>
   <P>
    {data.discountedPrice}
    <AttachMoneyIcon fontSize="20px" />
   </P>
   <Small>
    <i>(Additional tax may apply on checkout)</i>
   </Small>
  </Box>
 );

 // Display if there is not discount price
 const noDiscountProduct = (
  <Box>
   <P>
    {data.price}
    <AttachMoneyIcon fontSize="20px" />
   </P>
   <Small>
    <i>(Additional tax may apply on checkout)</i>
   </Small>
  </Box>
 );

 let priceDisplay;

 // Conditional rendering
 if (data.discountedPrice >= data.price) {
  priceDisplay = noDiscountProduct;
 } else {
  priceDisplay = discountProduct;
 }

 return priceDisplay;
};

export default PriceDisplay;
