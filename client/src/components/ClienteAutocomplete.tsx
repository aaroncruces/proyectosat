import React from 'react'
import { TextField, Autocomplete } from '@mui/material';
import { textFieldStyle } from './textFieldStyle';
import { clientes } from './../model/mocks/clientes'
import { Cliente } from '../model/types/Cliente';


export const ClienteAutocomplete = () => {
  return (
    <>
      <Autocomplete id="ClienteAutocomplete"
        options={clientes}
        getOptionLabel={(cliente: Cliente) => cliente.nombre + " " + cliente.apellido +": "+cliente.rut.toString()}
        renderInput={(params) => (
          <TextField {...params} label="Cliente (opcional)" variant="outlined" fullWidth sx={{ ...textFieldStyle }} />
        )}
      />
    </>
  )
}
