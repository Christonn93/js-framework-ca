// Importing react elements
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing MUI components
import { Toolbar, CssBaseline, Button, Tooltip, IconButton, useMediaQuery, useTheme, Box, Grid } from "@mui/material";

// Importing components
import CartIcon from "../assets/CartIcon";
import Logo from "../../images/color-noBG.png";
import DrawerComponent from "./Drawer";

// Styling company logo
const CompanyLogo = styled.img`
 height: clamp(50px, 80px, 150px);
`;

const Navigation = () => {
 const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down("md"));

 return (
  <Box bgcolor={"primary"} width={"100%"}>
   <CssBaseline />
   <Toolbar>
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
     <Grid item>
      <Link to="/">
       <CompanyLogo src={Logo} alt="Logo" loading="lazy" />
      </Link>
     </Grid>
     <Grid item>
      {isMobile ? (
       <DrawerComponent />
      ) : (
       <>
        <Link to="/">
         <Tooltip title="Home">
          <Button variant="text" >Home</Button>
         </Tooltip>
        </Link>
        <Link to="/contact">
         <Tooltip title="Contact us">
          <Button variant="text" >Contact</Button>
         </Tooltip>
        </Link>
        <Link to="/cart">
         <Tooltip title="Your cart">
          <IconButton color="success">
           <CartIcon />
          </IconButton>
         </Tooltip>
        </Link>
       </>
      )}
     </Grid>
    </Grid>
   </Toolbar>
  </Box>
 );
};

export default Navigation;
