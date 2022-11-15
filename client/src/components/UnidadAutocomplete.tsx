import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { unidades } from '../model/mocks/unidades'
import { Unidad } from '../model/types/Unidad'
import { textFieldStyle } from './textFieldStyle'
import ScaleIcon from '@mui/icons-material/Scale';
import { AutocompleteProps } from './AutocompleteProps';

export const UnidadAutocomplete = ({ optional }: AutocompleteProps) => {
  return (
    <>
      <Autocomplete id="UnidadAutocomplete"
        options={unidades}
        getOptionLabel={(unidad: Unidad) => unidad.unidad + " (" + unidad.alias + ")"}
        renderInput={(params) => (
          <TextField {...params}
            label={("Unidades") + (optional?" (opcional)":"")}
            variant="outlined"
            color={optional ? 'secondary' : "primary"}
            sx={{ ...textFieldStyle }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="end">
                    <ScaleIcon color={optional ? 'secondary' : "primary"} />
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
