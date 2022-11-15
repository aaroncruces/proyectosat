import { Box, Button, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { formBoxStyle, formPaperElevation, formPaperSpacing } from '../components/fomSpacing'
import { textFieldStyle } from '../components/textFieldStyle'
import { Navbar } from '../layouts/Navbar'
import { pageList } from './pageList'
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';

export const NuevoCliente = () => {
  return (
    <>
      <Navbar currentPage={pageList.nuevoCliente} />
      <Box sx={formBoxStyle}>
        <Paper
          elevation={formPaperElevation}
          sx={formPaperSpacing}
        >
          <Typography variant="h4" gutterBottom textAlign='center'>
            Nuevo Cliente
          </Typography>
          <Grid container>
            <Grid xs={12}>
              <TextField id="outlined-basic"
                label="Rut Cliente"
                variant="outlined"
                sx={{ ...textFieldStyle }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={3}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={3}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Otros Nombres (opcional)"
                  color="secondary"
                  variant="outlined"
                  fullWidth sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={3}>
              <Box sx={{ pl: 2 }}>
                <TextField id="outlined-basic"
                  label="Apellido 1"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={3}>
              <Box sx={{ pl: 2 }}>
                <TextField
                  id="outlined-basic"
                  label="Apellido 2 (opcional)"
                  color="secondary"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Telefono Movil (opcional)"
                  color="secondary" variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box sx={{ pl: 2 }}>
                <TextField id="outlined-basic"
                  label="Telefono Fijo (opcional)"
                  color="secondary" variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Email 1 (opcional)"
                  color="secondary"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box sx={{ pl: 2 }}>
                <TextField id="outlined-basic"
                  label="Email 2 (opcional)"
                  color="secondary"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={12}>
              <TextField
                id="outlined-basic"
                label="Direccion (opcional)"
                color="secondary"
                variant="outlined"
                sx={{ ...textFieldStyle }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={2} >
              <Button>Atras</Button>
            </Grid>
            <Grid xs={2}>
              <Button variant="contained">Continuar</Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}
