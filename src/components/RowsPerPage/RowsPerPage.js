// vendors
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react'

// styles
import { RowsPerPageWrapper, Label } from './styled'

function RowsPerPage({currentNumber, total}) {

  const [current, setCurrent] = useState(currentNumber);

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return <RowsPerPageWrapper>
    <Label>
      Exibindo {current} de {total} registros
    </Label>
    <FormControl sx={{ m: 1, minWidth: 40 }}>
        <Select
          size="small"
          value={current}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={currentNumber}>{currentNumber}</MenuItem>
        </Select>
      </FormControl>
  </RowsPerPageWrapper>
}

export default RowsPerPage