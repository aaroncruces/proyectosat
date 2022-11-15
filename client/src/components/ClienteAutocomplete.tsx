import React from 'react'
import { TextField, Autocomplete, InputAdornment } from '@mui/material';
import { textFieldStyle } from './textFieldStyle';
import { clientes } from './../model/mocks/clientes'
import { Cliente } from '../model/types/Cliente';
import { AutocompleteProps } from './AutocompleteProps';
import PersonIcon from '@mui/icons-material/Person';

export const ClienteAutocomplete = ({optional}:AutocompleteProps) => {
  return (
    <>
      <Autocomplete id="ClienteAutocomplete"
        options={clientes}
        getOptionLabel={(cliente: Cliente) => cliente.nombre + " " + cliente.apellido +": "+cliente.rut.toString()}
        renderInput={(params) => (
          <TextField {...params}
          label={("Cliente") + (optional?" (opcional)":"")}
          variant="outlined"
          color={optional ? 'secondary' : "primary"}
          sx={{ ...textFieldStyle }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="end">
                  <PersonIcon color={optional ? 'secondary' : "primary"} />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            )
          }}
          />
        )}
      />
    </>
  )
}
