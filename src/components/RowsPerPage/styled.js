import styled from 'styled-components'

export const RowsPerPageWrapper = styled.div`
  display: flex;
  align-items: center;

  .MuiFormControl-root {
    .MuiOutlinedInput-root {
      border-radius: 6px;

      .MuiSelect-select {
        font-size: 12px;
        font-family: 'Inter';
        letter-spacing: -0.025em;
        color: #1D2C4B;
        height: 10px;
        display: flex;
        align-items: center;
        padding: 8px;
        padding-right: 24px;
      }
      .MuiSvgIcon-root {
        font-size: 15px;
      }
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #D1D1D1;
      }
    }
  }
`

export const Label = styled.div`
  margin-right: 8px;
  color: #A3A3A3;
  letter-spacing: -0.025em;
  font-size: 12px;
  font-family: Inter;
`
