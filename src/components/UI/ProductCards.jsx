import * as React from "react";
import { Link } from "react-router-dom";

// Importing mui elements
import { Card, CardContent, CardMedia, IconButton, Typography, Stack, Tooltip, Button, ImageListItemBar, ImageListItem, Alert } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ProductCard = (props) => {
 if (props.discountPrice >= props.price) {
  return (
   <Card sx={{ maxWidth: 345 }}>
    <CardMedia component="img" alt="green iguana" height="140" image={props.imageUrl} />
    <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      {props.title}
     </Typography>
    </CardContent>
    <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"} marginBottom={2}>
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
    </Stack>
   </Card>
  );
 }

 if (props.discountPrice <= props.price) {
  return (
   <Card sx={{ maxWidth: 345 }}>
    <ImageListItem key={props.id}>
     <CardMedia component="img" alt="green iguana" height="140" image={props.imageUrl} />
     <ImageListItemBar
      sx={{ backgroundColor: "transparent" }}
      position="top"
      actionIcon={
       <Alert variant="filled" icon={false} >
        ON SALE
       </Alert>
      }
      actionPosition="left"
     />
    </ImageListItem>

    <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      {props.title}
     </Typography>
    </CardContent>
    <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"} marginBottom={2}>
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
    </Stack>
   </Card>
  );
 }
};

export default ProductCard;
