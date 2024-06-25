import React, { lazy } from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/system';
import trek6 from '../assets/images/trek6.jpg';
import ic1 from '../assets/images/ic1.png';
const HomeSection = styled('div')({
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
const HomeContent = styled('div')({
  textAlign: 'center',
  maxWidth: '600px',
  paddingTop: '20px',
});

const Home = () => {
  return (
    <HomeSection id="Home">
      <Typography variant="h3" id="trekname" gutterBottom style={{ marginBottom: '50px' }}>
        Trek with Fun
      </Typography>
      <Grid container spacing={-15}>
        <Grid item xs={12} md={6}>
          {trek6 && (
            <ServiceCard id='homecard'>
              <ServiceCardMedia
                id='homeimg'
                component="img"
                image={trek6}
                alt="Your Home"
                style={{ borderRadius: "5px", height: 250, margin: '0 auto', backdropFilter: 'blur(50px)' }}
              />
            </ServiceCard>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeContent id='homecontent'>
            <Typography variant="body1" id="body">
              I'm a seasoned trekking guide with a deep love for the outdoors. My passion lies in helping people discover the beauty and challenges of nature, pushing their boundaries, and creating lasting memories. I believe trekking is more than just a physical activity; it's a journey of self-discovery and connection with the environment. Let's embark on an adventure together!
            </Typography>
          </HomeContent>
        </Grid>
      </Grid>
    </HomeSection>
  );
};

export default Home;
