import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ser1 from '../assets/images/ser1.jpg';
import ser2 from '../assets/images/ser2.jpg';

const ServicesSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: 'transparent',
  backdropFilter: 'blur(50px)',
  boxShadow: '0px 0px 30px rgba(227, 228, 237, 0.40)',
  border: '2px solid rgba(255, 255, 255, 0.18)',
  color: 'black',
  borderRadius: '4px',
  marginTop: '20px',
  padding: '20px 0px 20px 20px',
});

const ServiceCard = styled(Card)({
  maxWidth: 345,
  borderRadius: '20px',
  margin: '20px'
});

const ServiceCardMedia = styled(CardMedia)({
  height: 230,
});

const ServiceCardContent = styled(CardContent)({
  textAlign: 'center',
  backgroundColor: 'rgb(180, 198, 219)'
});

const Services = () => {
  return (
    <ServicesSection id="services">
      <Typography variant="h3" gutterBottom id="sertex">
        Services
      </Typography>
        <Grid className='gridbox' container spacing={-15}>
          <Grid item className='griditem'>
            <ServiceCard>
              <ServiceCardMedia
                component="img"
                image={ser1}
                alt="Service 1"
              />
              <ServiceCardContent>
                <Typography variant="h5" component="div">
                  Camping Under the Mountain Sunset
                </Typography>
                <Typography variant="body2" textAlign="justify">
                  Experience the magic of camping amidst breathtaking mountain views, with a stunning sunset as your backdrop.
                </Typography>
              </ServiceCardContent>
            </ServiceCard>
          </Grid>
          <Grid item className='griditem'>
            <ServiceCard>
              <ServiceCardMedia
                component="img"
                image={ser2}
                alt="Service 2"
              />
              <ServiceCardContent>
                <Typography variant="h5" component="div">
                  Skydiving Adventure
                </Typography>
                <Typography variant="body2" textAlign="justify">
                  Feel the adrenaline rush of freefall and experience breathtaking views from above. We offer safe and exciting skydiving experiences for all skill levels.
                </Typography>
              </ServiceCardContent>
            </ServiceCard>
          </Grid>
        </Grid>
    </ServicesSection>
  );
};

export default Services;

