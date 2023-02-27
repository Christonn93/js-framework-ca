import React from "react";

// Importing mui items
import { Box } from "@mui/material";

const LoadingAnimation = () => {
 return (
  <Box boxShadow="outline" p="6" rounded="md" bg="white" margin={5}>
  <div className="loading-box">
  <div className="loader">
    <div className="loader-wheel"></div>
    <div className="loader-text"></div>
   </div>
  </div>
  </Box>
 );
};

export default LoadingAnimation;