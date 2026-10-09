import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
   return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Anillo Único
          </Typography>
          
          <Typography variant="h6" component="div">
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar