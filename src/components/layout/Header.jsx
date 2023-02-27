import * as React from "react";
import { Link } from "react-router-dom";

// Importing MUI components
import { Box } from "@mui/system";

// Importing components
import Navigation from "./Navigation";

// Importing components
import Logo from "../../images/color-noBG.png";

const Header = () => {
  return (
    <Box backgroundColor={"#cfe2f3"}>
     <header>
      <Link to="/">
       <img src={Logo} alt="Logo" loading="lazy" height={150} />
      </Link>
      <Navigation p={5} />
     </header>
    </Box>
   );
  };

export default Header