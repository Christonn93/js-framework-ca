// Importing react elements
import * as React from "react";
import { Link } from "react-router-dom";

// Importing MUI components
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

// Importing components
import Logo from "../../images/color-noBG.png";

const Footer = () => {
 return (
  <footer>
   <Box p="5" backgroundColor={"#cfe2f3"}>
    <Grid container spacing={3}>
     <Grid item xs textAlign={"center"}></Grid>
     <Grid item xs={6} textAlign={"center"}>
      <h2 className="footer-title">About us</h2>
      <Link to={"/contact"}>
       <p>Contact</p>
      </Link>
      <Link to="/">
       <img src={Logo} alt="Logo" loading="lazy" height={150} />
      </Link>
      <p>Copyright Store Online</p>
     </Grid>
     <Grid item xs textAlign={"center"}></Grid>
    </Grid>
   </Box>
  </footer>
 );
};

export default Footer;
