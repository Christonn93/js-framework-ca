// Importing react elements
import React from "react";
import styled from "styled-components";

// Importing MUI components
import { Box, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";

const Form = styled.form`
 display: flex;
 flex-direction: column;
 gap: 15px;
 padding: 15px;
 margin: 15px;
`;

const Contact = () => {
 return (
  <Box p={4}>
   <Container className="contact-container">
    <h1>Contact us</h1>
    <Form>
     <TextField label="First name" fullWidth type="text" name="name" className="form-input" />
     <TextField label="Email" fullWidth type="email" name="name" className="form-input" />
     <TextField label="Subject" fullWidth type="text" name="name" className="form-input" />
     <TextField label="Your message" fullWidth type="text" name="name" className="form-input" />
     <Button variant="contained">Send</Button>
    </Form>
   </Container>
  </Box>
 );
};

export default Contact;
