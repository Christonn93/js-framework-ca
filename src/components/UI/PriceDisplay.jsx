import React from "react";

// Importing mui items
import { Chip } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const PriceDisplay = (data) => {
 // Calculating discount price
 const fullPrice = data.price;
 const reducedPrice = data.discountedPrice;
 const discountPercentage = Math.trunc(100 * Math.abs((fullPrice - reducedPrice) / ((fullPrice + reducedPrice) / 2)));

 // Display if there is a discount price
 const discountProduct = (
  <ul className="price-display">
   <li>
    <Chip label={discountPercentage + "% off"} color="success"></Chip>
   </li>
   <li>
    <p>
     {data.discountedPrice} <AttachMoneyIcon fontSize="20px" />
    </p>
   </li>
   <li>
    <p className="price-off">
     {data.price} <AttachMoneyIcon fontSize="20px" />
    </p>
   </li>
  </ul>
 );

 // Display if there is not discount price
 const noDiscountProduct = (
  <p>
   <AttachMoneyIcon fontSize="20px" /> {data.price}
  </p>
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
