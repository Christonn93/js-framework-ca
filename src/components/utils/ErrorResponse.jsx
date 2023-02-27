import React from "react";

// Importing mui items
import { Alert, AlertTitle} from "@mui/material";

const ErrorResponse = (props) => {
 return (
  <Alert severity={props.severity}>
   <AlertTitle>{props.title}</AlertTitle>
   <p>{props.content}</p>
  </Alert>
 );
};

export default ErrorResponse;
