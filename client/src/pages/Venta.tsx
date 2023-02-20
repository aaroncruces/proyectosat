import React from 'react'
import { Typography, Paper, Button, Box, Grid, TextField, InputAdornment, } from '@mui/material';
import { textFieldStyle } from '../components/textFieldStyle';
import { ClienteAutocomplete } from '../components/ClienteAutocomplete';
import { Navbar } from '../layouts/Navbar';
import { pageList } from './pageList';
import { formBoxStyle, formPaperElevation, formPaperSpacing } from '../components/fomSpacing';
import LayersIcon from '@mui/icons-material/Layers';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import PaymentsIcon from '@mui/icons-material/Payments';

export const Venta = () => {
  return (
    <>
      <Navbar currentPage={pageList.venta} />
      <Box sx={formBoxStyle}>
        <Paper
          elevation={formPaperElevation}
          sx={formPaperSpacing}
        >
          <Typography variant="h4" gutterBottom textAlign='center'>
            Venta Producto
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Producto"
                variant="outlined"
                sx={{ ...textFieldStyle }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LayersIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <ClienteAutocomplete optional={true} />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ pr: 1 }}>
                <TextField
                  id="outlined-basic"
                  label="Precio Unitario"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MonetizationOnIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ pl: 1 }}>
                <TextField
                  id="outlined-basic"
                  label="Cantidad"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ClearAllIcon color="primary" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <h4>/40</h4>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Precio neto (total)"
                variant="outlined"
                sx={{ ...textFieldStyle }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PriceChangeIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ pr: 1 }}>
                <TextField
                  id="outlined-basic"
                  label="Precio bruto"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PriceChangeIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ pl: 1 }}>
                <TextField
                  id="outlined-basic"
                  label="IVA"
                  defaultValue="0"
                  disabled
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PaymentsIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={2} >
              <Button>Atras</Button>
            </Grid>
            <Grid item xs={5}>
              <Button variant="contained"> Agregar otro</Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained"> Pagar</Button>
            </Grid>
          </Grid>
        </Paper>
        <h3>resumen productos</h3>
      </Box>
    </>
  )
}
