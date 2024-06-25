import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, TextField, Button, Typography } from '@mui/material';

const Section = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px 20px',
});

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '600px',
  marginTop: '20px'
});

const ContactTextField = styled(TextField)({
  marginBottom: '15px'
});

const ContactButton = styled(Button)({
  marginTop: '10px'
});

const Contact = () => {
  return (
    <Section id="contact">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
      </Typography>
      <ContactForm noValidate autoComplete="off">
        <ContactTextField
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <ContactTextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
        />
        <ContactTextField
          label="Message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
        />
        <ContactButton variant="contained" color="primary" type="submit">
          Submit
        </ContactButton>
      </ContactForm>
    </Section>
  );
};

export default Contact;
