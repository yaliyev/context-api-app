import React from 'react'
import { Box, AppBar, Toolbar, Button, IconButton, Typography,Badge } from '@mui/material'


import MenuIcon from '@mui/icons-material/Menu'
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'
import { BasketContext } from '../services/context'
import { useContext } from 'react';

const Navbar = () => {
  const { basket, setBasket } = useContext(BasketContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            <Link style={{ color: 'white' }} to={"/categories"}>Categories</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 20,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            <Link style={{ color: 'white' }} to={"/basket"}>Basket
              <Badge style={{marginLeft:'10px',marginBottom:'25px'}} badgeContent={[...basket].length} color="success">               
              </Badge>
            </Link>

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar