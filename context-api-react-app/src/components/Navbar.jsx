import React from 'react'
import { Box,AppBar, Toolbar,Button,IconButton,Typography} from '@mui/material'


import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,
          textDecoration: 'underline',
          cursor: 'pointer' }}>
            <Link style={{color:'white'}} to={"/categories"}>Categories</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 20,
          textDecoration: 'underline',
          cursor: 'pointer' }}>
            <Link style={{color:'white'}} to={"/basket"}>Basket</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar