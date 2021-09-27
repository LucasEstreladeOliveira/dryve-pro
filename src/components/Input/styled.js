import styled from 'styled-components'


export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  .MuiFormControl-root {
    background: #FFFFFF;
    width: 100%;
    
    .MuiInputLabel-root {
      color: #A3A3A3;
      font-size: 14px;
    }
    input {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.025em;
      color: #1D2C4B;
    }

    .MuiOutlinedInput-notchedOutline {
      border-radius: 6px;
      border: 1px solid #d1d1d1;
    }
  }
`