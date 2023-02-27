// Importing UI elements and react elements
import { Box, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Contact = () => {
 return (
  <Box p={4}>
   <Container className="contact-container" boxShadow='outline'>
   <h1>Contact us</h1>
    <form>
     <TextField label="First name" fullWidth type="text" name="name" className="form-input" />
     <TextField label="Email" fullWidth type="email" name="name" className="form-input" />
     <TextField label="Subject" fullWidth type="text" name="name" className="form-input" />
     <TextField label="Your message" fullWidth type="text" name="name" className="form-input" />
     <Button variant="contained">Send</Button>
    </form>
   </Container>
  </Box>
 );
};

export default Contact;
