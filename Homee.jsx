
import { AppBar, Box, Button , Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Homee = () => {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            <Link to="/" style={{color:'white', textDecoration:'none'}}>
            
          </Link></Typography>
          <Button color="inherit">
            <Link to="/moviename" style={{color:'white', textDecoration:'none'}}>view</Link></Button>
            <Button color="inherit"> <Link to="/addmovies" style={{color:'white', textDecoration:'none'}}>add</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Homee
