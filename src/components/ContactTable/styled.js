import styled from 'styled-components'

export const TableWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  border-radius: 8px;

  .MuiTableBody-root {
    .MuiTableRow-root {
      cursor: pointer;
    }
  }
`;
export const UserInitials = styled.div`
  width: 48px;
  height: 48px;
  background: #EAF9FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: #0065FF;
  font-family: 'Inter';
  letter-spacing: -0.025em;
  margin-right: 16px;
`;
export const Label = styled.div`
  color: #1D2C4B;
  font-size: 14px;
  letter-spacing: -0.025em;
  font-family: 'Inter';
  `;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  `;
export const HeadLabel = styled.div`
  height: 48px;
  color:  #A3A3A3;
  font-size: 14px;
  letter-spacing: -0.025em;
  font-family: 'Inter';
  display: flex;
  align-items: center;
`;
export const FooterWrapper = styled.div`
  height: 68px;
  padding: 16px;
  display: flex;
  justify-content: space-between;

  .MuiButtonBase-root path {
    fill: #0065FF
  }
  .MuiPaginationItem-page {
    border: 1px solid #EFEFEF;
  }
  .MuiPaginationItem-ellipsis {
    border: 1px solid #EFEFEF;
    border-radius: 4px;
    height: 26.64px;
  }
  .Mui-selected {
    border: 1px solid transparent;
  }
`;