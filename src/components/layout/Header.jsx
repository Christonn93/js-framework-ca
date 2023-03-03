// Importing react elements
import * as React from "react";
import styled from "styled-components";

// Importing components
import Navigation from "./Navigation";

// Styling header component
const HeaderElement = styled.header`
 padding: 15px;
`;

const Header = () => {
 return (
  <HeaderElement>
   <Navigation />
  </HeaderElement>
 );
};

export default Header;
