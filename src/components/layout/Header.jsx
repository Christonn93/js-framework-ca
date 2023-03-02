// Importing react elements
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing MUI components
import { Box } from "@mui/system";

// Importing components
import Navigation from "./Navigation";
import Logo from "../../images/color-noBG.png";

const HeaderElement = styled.header`
 display: flex;
 justify-content: space-between;
 padding: 15px;
 flex-wrap: wrap;
`;

const CompanyLogo = styled.img`
    height: clamp(50px, 80px, 150px);
`

const Header = () => {
 return (
  <Box backgroundColor={"#cfe2f3"}>
   <HeaderElement>
    <Link to="/">
     <CompanyLogo src={Logo} alt="Logo" loading="lazy" />
    </Link>
    <Navigation p={5} />
   </HeaderElement>
  </Box>
 );
};

export default Header;
