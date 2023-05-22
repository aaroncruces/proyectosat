import { Alert, AlertTitle, Box, Button, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
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

  const [errorAlert, setErrorAlert] = useState("")
  const [successAlert, setSuccessAlert] = useState("")

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

  const [name, setName] = useState("")
  const [nameErrorMessage, setNameErrorMessage] = useState("")
  const writingName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newName = formatName(ev.target.value)
    setName(newName);
    if (!newName || newName === "") {
      setNameErrorMessage("Nombre es obligatorio")
    } else {
      setNameErrorMessage("")
    }
  }
  const displayName: () => string = () => decorateName(name);

  const [middleNames, setMiddleNames] = useState("")
  const writingMiddleNames = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setMiddleNames(formatName(ev.target.value));
  const displayMiddleNames: () => string = () => decorateName(middleNames);

  const [paternalLastName, setPaternalLastName] = useState("")
  const writingPaternalLastName = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setPaternalLastName(formatName(ev.target.value));
  const displayPaternalLastName: () => string = () => decorateName(paternalLastName);

  const [maternalLastName, setMaternalLastName] = useState("")
  const writingMaternalLastName = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setMaternalLastName(formatName(ev.target.value));
  const displayMaternalLastName: () => string = () => decorateName(maternalLastName);

  const [mobilePhone, setMobilePhone] = useState("")
  const writingMobilePhone = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setMobilePhone(formatNumeric(ev.target.value));
  const displayMobilePhone: () => string = () => mobilePhone;

  const [landlinePhone, setLandlinePhone] = useState("")
  const writingLandlinePhone = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setLandlinePhone(formatNumeric(ev.target.value));
  const displayLandlinePhone: () => string = () => landlinePhone;

  const [email, setEmail] = useState("")
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const writingEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(formatEmail(ev.target.value));
    setEmailErrorMessage("")
  }
  const displayEmail: () => string = () => email;

  const [secondEmail, setSecondEmail] = useState("")
  const [secondEmailErrorMessage, setSecondEmailErrorMessage] = useState("")
  const writingSecondEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSecondEmail(formatEmail(ev.target.value));
    setSecondEmailErrorMessage("")
  }
  const displaySecondEmail: () => string = () => secondEmail;

  const [street, setStreet] = useState("")
  const writingStreet = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setStreet(formatAlphanumeric(ev.target.value));
  const displayStreet: () => string = () => decorateName(street);

  const [addressNumber, setAddressNumber] = useState("")
  const writingAddressNumber = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setAddressNumber(formatNumeric(ev.target.value));
  const displayAddressNumber: () => string = () => addressNumber;

  const [apartmentNumber, setApartmentNumber] = useState("")
  const writingApartmentNumber = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setApartmentNumber(formatNumeric(ev.target.value));
  const displayApartmentNumber: () => string = () => apartmentNumber;

  const [city, setCity] = useState("")
  const writingCity = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setCity(formatAlphanumeric(ev.target.value));
  const displayCity: () => string = () => decorateName(city);

  const thereAreErrorMessages = () => (rutErrorMessage !== "" || nameErrorMessage !== "" || emailErrorMessage !== "" || secondEmailErrorMessage !== "");


  const clearFields = () => {
    setRut("")
    setRutErrorMessage("")
    setName("")
    setNameErrorMessage("")
    setMiddleNames("")
    setPaternalLastName("")
    setMaternalLastName("")
    setLandlinePhone("")
    setEmail("")
    setSecondEmail("")
    setStreet("")
    setAddressNumber("")
    setApartmentNumber("")
    setApartmentNumber("")
  }

  const postPerson = async () => {

    //hooks are somehow asynchronous
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

    if (!name || name === "") {
      setNameErrorMessage("Nombre es obligatorio")
      errorTriggered = true
    }

    if (email && email.length > 0) {
      const newEmailErrorMessage = checkEmail(email)
      setEmailErrorMessage(newEmailErrorMessage)
      errorTriggered = errorTriggered || newEmailErrorMessage !== ""
    }

    if (secondEmail && secondEmail.length > 0) {
      const newSecondEmailErrorMessage = checkEmail(secondEmail)
      setSecondEmailErrorMessage(newSecondEmailErrorMessage)
      errorTriggered = errorTriggered || newSecondEmailErrorMessage !== ""
    }

    if (thereAreErrorMessages() || errorTriggered) return;

    const newRut = rut.slice(0, (rut.length - 1))
    const newName = name.trimEnd()
    const newMiddleNames = middleNames.trimEnd()
    const newPaternalLastName = paternalLastName.trimEnd()
    const newMaternalLastName = maternalLastName.trimEnd()
    const newMobilePhone = mobilePhone.trimEnd()
    const newLandlinePhone = landlinePhone.trimEnd()
    const newEmail = email.trimEnd()
    const newSecondEmail = secondEmail.trimEnd()
    const newStreet = street.trimEnd()
    const newAddressNumber = addressNumber.trimEnd()
    const newApartmentNumber = apartmentNumber.trimEnd()
    const newCity = city.trimEnd()


    const newPerson = {
      rut: parseInt(newRut),
      name: newName,
      middleNames: newMiddleNames,
      paternalLastName: newPaternalLastName,
      maternalLastName: newMaternalLastName,
      phoneNumbers: [
        { number: parseInt(newMobilePhone), phoneType: "MOBILE" },
        { number: parseInt(newLandlinePhone), phoneType: "LANDLINE" }
      ],
      emails: [
        { email: newEmail, emailType: "PRIMARY" },
        { email: newSecondEmail, emailType: "SECONDARY" }
      ],
      address: {
        street: newStreet,
        addressNumber: newAddressNumber,
        apartmentNumber: newApartmentNumber,
        city: newCity,
      }
    }



    const response = await fetch("http://localhost:5000/person", {
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
      body: JSON.stringify(newPerson), // body data type must match "Content-Type" header
    });

    console.log(response)

    if (!response.ok) {
      if (response.status === 422) {
        const errorBody = await response.json()
        setErrorAlert(errorBody["databaseErrorMessage"])
        setTimeout(() => {
          setErrorAlert("")
        }, 5000)
      } else {
        setErrorAlert("error desconocido")
        setTimeout(() => {
          setErrorAlert("")
        }, 5000)
      }

    }
    else //response.ok
    {
      setSuccessAlert("Persona ingresada correctamente")
      setTimeout(() => {
        setSuccessAlert("")
      }, 5000)
      clearFields()
    }
  }

  return (
    <>
      <Navbar currentPage={pageList.nuevoCliente} />
      {errorAlert !== "" && <Alert severity="error" variant="filled"><AlertTitle>{errorAlert}</AlertTitle></Alert>}
      {successAlert !== "" && <Alert severity="success" variant="filled"><AlertTitle>{successAlert}</AlertTitle></Alert>}

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
                  value={displayName()}
                  onChange={writingName}
                  error={nameErrorMessage !== ""}
                  helperText={nameErrorMessage}
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color={nameErrorMessage === "" ? "primary" : "error"} />
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
                  value={displayMiddleNames()}
                  onChange={writingMiddleNames}
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
                  label="Apellido (opcional)"
                  value={displayPaternalLastName()}
                  onChange={writingPaternalLastName}
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
                  label="Segundo Apellido (opcional)"
                  value={displayMaternalLastName()}
                  onChange={writingMaternalLastName}
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
                  value={displayMobilePhone()}
                  onChange={writingMobilePhone}
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
                  value={displayLandlinePhone()}
                  onChange={writingLandlinePhone}
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
                  value={displaySecondEmail()}
                  onChange={writingSecondEmail}
                  error={secondEmailErrorMessage !== ""}
                  helperText={secondEmailErrorMessage}
                  color="secondary"
                  variant="outlined"
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color={secondEmailErrorMessage === "" ? "secondary" : "error"} />
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
                  value={displayStreet()}
                  onChange={writingStreet}
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
                  value={displayAddressNumber()}
                  onChange={writingAddressNumber}
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
                  value={displayApartmentNumber()}
                  onChange={writingApartmentNumber}
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
                  value={displayCity()}
                  onChange={writingCity}
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
              <Button variant="contained" onClick={postPerson}
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