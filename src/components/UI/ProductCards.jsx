import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing mui elements
import { IconButton, Typography, Tooltip, Button, ButtonGroup, Box } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

// Importing price props
import PriceDisplay from "./PriceDisplay";
import { Container } from "@mui/system";

const ItemCard = styled.div`
 height: 100%;
 border: 1px solid black;
 border-radius: 10px;
 overflow: hidden;
`;

const ItemImage = styled.div`
 height: 200px;
 border-radius: 0;
 position: relative;
 margin-bottom: 15px;

 img {
  width: 100%;
  height: 100%;
 }
`;

const ProductInfo = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
 margin: 15px 0;
 height: 100%;
`;

const Sale = styled.span`
position: absolute;
top: 0;
background-color: red;
height: auto;
`

const ProductCard = (props) => {
 const price = PriceDisplay(props.data);

 if (props.discountPrice <= props.price) {
  return (
   <ItemCard>
    <ItemImage>
     <img src={props.imageUrl} alt="product" loading="lazy" />
     <Sale>Sale</Sale>
    </ItemImage>
    <Container>
     <ProductInfo>
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="body2">{price}</Typography>
     </ProductInfo>
     <Box Container marginBottom={2}>
      <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
       <Link to={props.productPath}>
        <Tooltip title="View product">
         <Button>View product</Button>
        </Tooltip>
       </Link>

       <Tooltip title="Add to cart">
        <IconButton color="success">
         <AddShoppingCartOutlinedIcon />
        </IconButton>
       </Tooltip>
      </ButtonGroup>
     </Box>
    </Container>
   </ItemCard>
  );
 } else {
  return (
   <ItemCard>
    <ItemImage>
     <img src={props.imageUrl} alt="product" loading="lazy" />
    </ItemImage>
    <Container>
     <ProductInfo>
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="body2">{price}</Typography>
     </ProductInfo>
     <Box Container marginBottom={2}>
      <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
       <Link to={props.productPath}>
        <Tooltip title="View product">
         <Button>View product</Button>
        </Tooltip>
       </Link>

       <Tooltip title="Add to cart">
        <IconButton color="success">
         <AddShoppingCartOutlinedIcon />
        </IconButton>
       </Tooltip>
      </ButtonGroup>
     </Box>
    </Container>
   </ItemCard>
  );
 }
};

export default ProductCard;
