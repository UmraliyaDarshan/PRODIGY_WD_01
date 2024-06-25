import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/system';
import abt from '../assets/images/abt.jpg';

const AboutSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
});

const ServiceCard = styled(Card)({
    maxWidth: 345,
});

const ServiceCardMedia = styled(CardMedia)({
    height: 140,
});

const AboutContent = styled('div')({
  textAlign: 'justify',
  maxWidth: '600px',
  paddingTop: '20px',
});

const About = () => {
  return (
    <AboutSection id="about">
      <Typography variant="h3" gutterBottom style={{marginBottom: '50px'}}>
        About Us
      </Typography>
      <Grid container spacing={-15}>
        <Grid item xs={12} md={6}>
          <ServiceCard>
            <ServiceCardMedia
              component="img"
              image={abt}
              alt="About Us"
              style={{ height: 250 }}
            />
          </ServiceCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutContent>
            <Typography variant="body1">
              We are a passionate team of trekking enthusiasts dedicated to providing unforgettable outdoor experiences. With years of experience exploring diverse landscapes, we craft personalized trekking plans that cater to all skill levels and interests. Our expert guides are committed to your safety and enjoyment, ensuring you have a truly transformative journey.
            </Typography>
          </AboutContent>
        </Grid>
      </Grid>
    </AboutSection>
  );
};

export default About;
