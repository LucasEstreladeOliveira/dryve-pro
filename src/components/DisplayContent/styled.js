import styled from 'styled-components'

export const DisplayContentWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 0px 0px 0px;
  position: relative;
  display: flex;
  min-height: ${props => typeof props.maxHeight === 'string' ? props.maxHeight : `${props.maxHeight}px` };
  height: ${props => typeof props.maxHeight === 'string' ? props.maxHeight : 'auto' };
  flex-direction: column;
  letter-spacing: -0.025em;
  color: #1D2C4B;
  margin-right: 12px;
`
export const Title = styled.div`
  margin: 0px 16px;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  color: #1D2C4B;
  letter-spacing: -0.025em;
`
export const Divider = styled.div`
  margin-top: 16px;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #EFEFEF;
`