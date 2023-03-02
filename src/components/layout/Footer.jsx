// Importing react elements
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing MUI components
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

// Importing components
import Logo from "../../images/color-noBG.png";

const Title = styled.h2`
 text-decoration: underline;
 text-decoration-thickness: 5px;
`;

const CompanyLogo = styled.img`
    max-height: clamp(50px, 80px, 150px);
`


const Footer = () => {
 return (
  <footer>
   <Box p="5" backgroundColor={"#cfe2f3"}>
    <Grid container spacing={3}>
     <Grid item xs textAlign={"center"}></Grid>
     <Grid item xs={6} textAlign={"center"}>
      <Title>About us</Title>
      <Link to={"/contact"}>
       <p>Contact</p>
      </Link>
      <Link to="/">
       <CompanyLogo src={Logo} alt="Logo" loading="lazy" />
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
