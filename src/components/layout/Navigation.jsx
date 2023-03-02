// Importing react elements
import * as React from "react";
import { Link } from "react-router-dom";

// Importing MUI components
import Stack from "@mui/material/Stack";

// Importing components
import CartIcon from "../assets/CartIcon";
import { Button, Tooltip, IconButton } from "@mui/material";

const Navigation = () => {
 return (
  <Stack direction={{sx: "column", sm: "column", md: "column", lg: "row"}} spacing={{sm: 1, md: 1, lg: 2}} alignItems="center">
   <Link to="/">
    <Tooltip title="Home">
     <Button>Home</Button>
    </Tooltip>
   </Link>
   <Link to="/contact">
    <Tooltip title="Contact us">
     <Button>Contact</Button>
    </Tooltip>
   </Link>
   <Link to="/cart">
    <Tooltip title="Your cart">
     <IconButton color="success">
      <CartIcon />
     </IconButton>
    </Tooltip>
   </Link>
  </Stack>
 );
};

export default Navigation;
