import { Box, Button, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { formBoxStyle, formPaperElevation, formPaperSpacing } from '../components/fomSpacing'
import { textFieldStyle } from '../components/textFieldStyle'
import { UnidadAutocomplete } from '../components/UnidadAutocomplete'
import { Navbar } from '../layouts/Navbar'
import { pageList } from './pageList'
import LayersIcon from '@mui/icons-material/Layers';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AddCommentIcon from '@mui/icons-material/AddComment';

export const EditarProducto = () => {
  return (<>
    <Navbar currentPage={pageList.editarProducto} />
    <Box sx={formBoxStyle}>
      <Paper
        elevation={formPaperElevation}
        sx={formPaperSpacing}
      >
        <Typography variant="h4" gutterBottom textAlign='center'>
          Editar Producto
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Nombre Producto"
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
            <TextField
              id="outlined-basic"
              label="Codigo Barras (opcional)"
              color="secondary"
              variant="outlined"
              fullWidth sx={{ ...textFieldStyle }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HorizontalSplitIcon color="secondary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Precio"
              variant="outlined"
              fullWidth sx={{ ...textFieldStyle }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MonetizationOnIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Cantidad Stock"
              color="primary"
              variant="outlined"
              sx={{ ...textFieldStyle }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddToPhotosIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <UnidadAutocomplete optional={true} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Observaciones (opcional)"
              color="secondary"
              variant="outlined"
              fullWidth sx={{ ...textFieldStyle }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddCommentIcon color="secondary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2} >
            <Button>Atras</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained"> Continuar</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  </>
  )
}
