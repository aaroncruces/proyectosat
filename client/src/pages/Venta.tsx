import React from 'react'

import { Typography, Paper, Button, Box, Grid, TextField,  } from '@mui/material';
import { textFieldStyle } from '../components/textFieldStyle';
import { ClienteAutocomplete } from '../components/ClienteAutocomplete';


export const Venta = () => {
  return (
    <>
    
    <Box sx={{
        'min-height': '100px',
        'padding': '100px'
      }}>
        <Paper
          elevation={3}
          sx={{
            'min-height': '100px',
            'padding': '10px'
          }}>

          <Typography variant="h4" gutterBottom textAlign='center'>
            Venta Producto
          </Typography>
          <Grid container>
            <Grid xs={12}>
              <TextField id="outlined-basic" label="Producto" variant="outlined" fullWidth sx={{ ...textFieldStyle }} />
            </Grid>
            <Grid xs={12}>
              <ClienteAutocomplete />
            </Grid>
            <Grid xs={12}>
              <TextField id="outlined-basic" label="Precio Unitario" variant="outlined" fullWidth sx={{ ...textFieldStyle }} />
            </Grid>
            <Grid xs={12}>
              <TextField id="outlined-basic" label="Cantidad" variant="outlined" fullWidth sx={{ ...textFieldStyle }} />
            </Grid>
            <Grid xs={12}>
              <TextField id="outlined-basic" label="Precio Neto" variant="outlined" fullWidth sx={{ ...textFieldStyle }} />
            </Grid>
            <Grid xs={12}>
              <TextField id="outlined-basic" label="IVA" defaultValue="0" disabled variant="outlined" fullWidth sx={{ ...textFieldStyle }} />
            </Grid>
            <Grid xs={2} >
              <Button>Atras</Button>
            </Grid>
            <Grid xs={2}>
              <Button variant="contained"> Continuar</Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}
