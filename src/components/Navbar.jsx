import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit'>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>View</Link></Button>
          <Button color='inherit'>
            <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>Add movies</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}


export default Navbar
