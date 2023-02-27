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
import SignpostIcon from '@mui/icons-material/Signpost';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { useState } from 'react'
import { stripRutSpecialCharacters, decorateRut, checkStructure_rutWithDv, checkDV_rutWithDV } from '../utils/rut_utils'
import { formatEmail, formatName, decorateName, formatAlphanumeric, formatNumeric, checkEmail } from '../utils/string_utils'



export const NuevoCliente = () => {

  const [rut, setRut] = useState("")
  const [rutErrorMessage, setRutErrorMessage] = useState("")
  const writingRut = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const strippedRut = stripRutSpecialCharacters(ev.target.value)
    setRut(strippedRut)
    setRutErrorMessage(checkStructure_rutWithDv(strippedRut))

  }
  const displayRut: () => string = () => {
    return decorateRut(rut)
  }

  const [nombre, setNombre] = useState("")
  const [nombreErrorMessage, setNombreErrorMessage] = useState("")
  const writingNombre = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newNombre = formatName(ev.target.value)
    setNombre(newNombre);
    if (!newNombre || newNombre === "") {
      setNombreErrorMessage("Nombre es obligatorio")
    } else {
      setNombreErrorMessage("")
    }
  }
  const displayNombre: () => string = () => decorateName(nombre);

  const [otrosNombres, setOtrosNombres] = useState("")
  const writingOtrosNombres = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setOtrosNombres(formatName(ev.target.value));
  const displayOtrosNombres: () => string = () => decorateName(otrosNombres);

  const [apellido, setApellido] = useState("")
  const writingApellido = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setApellido(formatName(ev.target.value));
  const displayApellido: () => string = () => decorateName(apellido);

  const [segundoApellido, setSegundoApellido] = useState("")
  const writingSegundoApellido = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setSegundoApellido(formatName(ev.target.value));
  const displaySegundoApellido: () => string = () => decorateName(segundoApellido);

  const [telefonoMovil, setTelefonoMovil] = useState("")
  const writingTelefonoMovil = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setTelefonoMovil(formatNumeric(ev.target.value));
  const displayTelefonoMovil: () => string = () => telefonoMovil;

  const [telefonoFijo, setTelefonoFijo] = useState("")
  const writingTelefonoFijo = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setTelefonoFijo(formatNumeric(ev.target.value));
  const displayTelefonoFijo: () => string = () => telefonoFijo;

  const [email, setEmail] = useState("")
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const writingEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(formatEmail(ev.target.value));
    setEmailErrorMessage("")
  }
  const displayEmail: () => string = () => email;

  const [segundoEmail, setSegundoEmail] = useState("")
  const [segundoEmailErrorMessage, setSegundoEmailErrorMessage] = useState("")
  const writingSegundoEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSegundoEmail(formatEmail(ev.target.value));
    setSegundoEmailErrorMessage("")
  }
  const displaySegundoEmail: () => string = () => segundoEmail;

  const [calle, setCalle] = useState("")
  const writingCalle = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setCalle(formatAlphanumeric(ev.target.value));
  const displayCalle: () => string = () => decorateName(calle);

  const [numeroDireccion, setNumeroDireccion] = useState("")
  const writingNumeroDireccion = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setNumeroDireccion(formatNumeric(ev.target.value));
  const displayNumeroDireccion: () => string = () => numeroDireccion;

  const [numeroDepartamento, setNumeroDepartamento] = useState("")
  const writingNumeroDepartamento = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setNumeroDepartamento(formatNumeric(ev.target.value));
  const displayNumeroDepartamento: () => string = () => numeroDepartamento;

  const [ciudad, setCiudad] = useState("")
  const writingCiudad = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setCiudad(formatAlphanumeric(ev.target.value));
  const displayCiudad: () => string = () => decorateName(ciudad);

  const thereAreErrorMessages = () => (rutErrorMessage !== "" || nombreErrorMessage !== "" || emailErrorMessage !== "" || segundoEmailErrorMessage !== "");


  const postCliente = async () => {

    //hooks are asynchronous
    let errorTriggered = false

    if (!rut || rut === "") {
      setRutErrorMessage("Rut es obligatorio")
      errorTriggered = true
    } else
      if (rutErrorMessage === "") {
        const newRutErrorMessage = checkDV_rutWithDV(rut)
        setRutErrorMessage(newRutErrorMessage)
        errorTriggered = errorTriggered || newRutErrorMessage !== ""
      };

    if (!nombre || nombre === "") {
      setNombreErrorMessage("Nombre es obligatorio")
      errorTriggered = true
    }

    if (email && email.length > 0) {
      const newEmailErrorMessage = checkEmail(email)
      setEmailErrorMessage(newEmailErrorMessage)
      errorTriggered = errorTriggered || newEmailErrorMessage !== ""
    }

    if (segundoEmail && segundoEmail.length > 0) {
      const newSegundoEmailErrorMessage = checkEmail(segundoEmail)
      setSegundoEmailErrorMessage(newSegundoEmailErrorMessage)
      errorTriggered = errorTriggered || newSegundoEmailErrorMessage !== ""
    }

    if (thereAreErrorMessages() || errorTriggered) return;

    const newRut = rut.slice(0, (rut.length - 1))
    const newNombre = nombre.trimEnd()
    const newOtrosNombres = otrosNombres.trimEnd()
    const newApellido = apellido.trimEnd()
    const newSegundoApellido = segundoApellido.trimEnd()
    const newTelefonoMovil = telefonoMovil.trimEnd()
    const newTelefonoFijo = telefonoFijo.trimEnd()
    const newEmail = email.trimEnd()
    const newSegundoEmail = segundoEmail.trimEnd()
    const newCalle = calle.trimEnd()
    const newNumeroDireccion = numeroDireccion.trimEnd()
    const newNumeroDepartamento = parseInt(numeroDepartamento)
    const newCiudad = ciudad.trimEnd()



    console.log("newRut: " + newRut)
    console.log("newNombre: " + newNombre)
    console.log("newOtrosNombres: " + newOtrosNombres)
    console.log("newApellido: " + newApellido)
    console.log("newSegundoApellido: " + newSegundoApellido)
    console.log("newTelefonoMovil: " + newTelefonoMovil)
    console.log("newTelefonoFijo: " + newTelefonoFijo)
    console.log("newEmail: " + newEmail)
    console.log("newSegundoEmail: " + newSegundoEmail)
    console.log("newCalle: " + newCalle)
    console.log("newNumeroDireccion: " + newNumeroDireccion)
    console.log("newNumeroDepartamento: " + newNumeroDepartamento)
    console.log("newCiudad: " + newCiudad)

    const newPersona = {
      rut: newRut,
      nombre: newNombre,
      otrosnombres: newOtrosNombres,
      segundoapellido: newSegundoApellido,
      telefonomovil: newTelefonoMovil,
      telefonofijo: newTelefonoFijo,
      email: newEmail,
      segundoemail: newSegundoEmail,
      calle: newCalle,
      numerodireccion: newNumeroDireccion,
      newNumeroDepartamento,
      newCiudad,
    }

    const response = await fetch("http://localhost:5000/persona", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(newPersona), // body data type must match "Content-Type" header
    });
  }

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
            <Grid item xs={12}>
              <TextField id="outlined-basic"
                label="Rut Cliente"
                variant="outlined"
                value={displayRut()}
                onChange={writingRut}
                error={rutErrorMessage !== ""}
                helperText={rutErrorMessage}
                sx={{ ...textFieldStyle }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon color={rutErrorMessage === "" ? "primary" : "error"} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Nombre"
                  value={displayNombre()}
                  onChange={writingNombre}
                  error={nombreErrorMessage !== ""}
                  helperText={nombreErrorMessage}
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color={nombreErrorMessage === "" ? "primary" : "error"} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Otros Nombres (opcional)"
                  value={displayOtrosNombres()}
                  onChange={writingOtrosNombres}
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
            <Grid item xs={3}>
              <Box sx={{ pl: 2 }}>
                <TextField id="outlined-basic"
                  label="Apellido 1 (opcional)"
                  value={displayApellido()}
                  onChange={writingApellido}
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
            <Grid item xs={3}>
              <Box sx={{ pl: 2 }}>
                <TextField
                  id="outlined-basic"
                  label="Apellido 2 (opcional)"
                  value={displaySegundoApellido()}
                  onChange={writingSegundoApellido}
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
            <Grid item xs={6}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Telefono Movil (opcional)"
                  value={displayTelefonoMovil()}
                  onChange={writingTelefonoMovil}
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
            <Grid item xs={6}>
              <Box sx={{ pl: 2 }}>
                <TextField id="outlined-basic"
                  label="Telefono Fijo (opcional)"
                  value={displayTelefonoFijo()}
                  onChange={writingTelefonoFijo}
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
            <Grid item xs={6}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Email 1 (opcional)"
                  value={displayEmail()}
                  onChange={writingEmail}
                  error={emailErrorMessage !== ""}
                  helperText={emailErrorMessage}
                  color="secondary"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color={emailErrorMessage === "" ? "secondary" : "error"} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ pl: 2 }}>
                <TextField id="outlined-basic"
                  label="Email 2 (opcional)"
                  value={displaySegundoEmail()}
                  onChange={writingSegundoEmail}
                  error={segundoEmailErrorMessage !== ""}
                  helperText={segundoEmailErrorMessage}
                  color="secondary"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color={segundoEmailErrorMessage === "" ? "secondary" : "error"} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Direccion: Calle (opcional)"
                  value={displayCalle()}
                  onChange={writingCalle}
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SignpostIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ pr: 2 }}>
                <TextField id="outlined-basic"
                  label="Direccion: Numero (opcional)"
                  value={displayNumeroDireccion()}
                  onChange={writingNumeroDireccion}
                  color="secondary"
                  variant="outlined"
                  fullWidth sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ pl: 2 }}>
                <TextField id="outlined-basic"
                  label="Direccion: Departamento (opcional)"
                  value={displayNumeroDepartamento()}
                  onChange={writingNumeroDepartamento}
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MapsHomeWorkIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ pl: 2 }}>
                <TextField id="outlined-basic"
                  label="Direccion: Ciudad (opcional)"
                  value={displayCiudad()}
                  onChange={writingCiudad}
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={2} >
              <Button>Atras</Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" onClick={postCliente}
                color={thereAreErrorMessages() ? "error" : "primary"}
                disabled={thereAreErrorMessages()}
              >Continuar</Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}
//thereAreErrorMessages()