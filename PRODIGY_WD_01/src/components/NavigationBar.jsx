import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  height: '80px',
  fontStyle: "roboto",
  transition: 'background-color 0.3s, color 0.3s, opacity 0.3s ease-in-out',
  backdropFilter: 'blur(50px)',
  boxShadow: '0px 0px 30px rgba(227, 228, 237, 0.40)',
  border: '2px solid rgba(255, 255, 255, 0.18)',
  color: 'black',
  opacity: 1,
  '&.fade-out': {
    opacity: 0,
  },
}))

const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  height: '100px',
  justifyContent: 'space-between',
});

const ButtonStyled = styled(Button)({
  fontFamily: "arial",
  backgroundColor: "transparent",
  backdropFilter: 'blur(30px)',
});

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    setLoading(false);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {
        loading ? (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
           display: 'flex', justifyContent: 'center', alignItems: 'center', 
           backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }}>
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <div>
            <AppBarStyled id='navbar' style={{ position: "fixed", backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)' }}>
              <ToolbarStyled>
                <Typography variant="h6">Trekking Plan</Typography>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <ButtonStyled color="inherit" component={Link} to="/">Home</ButtonStyled>
                  <ButtonStyled color="inherit" component={Link} to="/about">About</ButtonStyled>
                  <ButtonStyled color="inherit" component={Link} to="/services">Services</ButtonStyled>
                  <ButtonStyled color="inherit" component={Link} to="/contact">Contact</ButtonStyled>
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                  <IconButton
                    color="inherit"
                    aria-label="open menu"
                    onClick={handleMenuClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose} className='hm' component={Link} to="/">Home</MenuItem>
                    <MenuItem onClick={handleMenuClose} className='hm' component={Link} to="/about">About</MenuItem>
                    <MenuItem onClick={handleMenuClose} className='hm' component={Link} to="/services">Services</MenuItem>
                    <MenuItem onClick={handleMenuClose} className='hm' component={Link} to="/contact">Contact</MenuItem>
                  </Menu>
                </Box>
              </ToolbarStyled>
            </AppBarStyled>
          </div>
        )
      }
    </>
  );
};

export default NavigationBar;

