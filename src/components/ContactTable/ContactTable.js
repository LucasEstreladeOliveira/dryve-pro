
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/core/Pagination';
import { UserInitials, Label, UserWrapper, HeadLabel, TableWrapper, FooterWrapper } from './styled.js'
import RowsPerPage from '../RowsPerPage/RowsPerPage.js';
import { useRouter } from 'next/router'


function firstAndLast(name) {
  const eachName = name.split(' ');
  const letterFirstName = eachName[0][0]
  const letterLastName = eachName[eachName.length - 1][0]

  return `${letterFirstName}${letterLastName}`
}
const ContactTable = ({users}) => {

  const router = useRouter();

  return (
    <TableContainer component={TableWrapper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>
            <HeadLabel>
              Nome do Cliente
            </HeadLabel>
          </TableCell>
          <TableCell>
            <HeadLabel>
              E-mail
            </HeadLabel>
          </TableCell>
          <TableCell>
            <HeadLabel>
              Telefone
            </HeadLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map( row => (
          <TableRow
            key={row.name}
            hover={true}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick={() => router.push(`/contatos/${row.id}`)}
          >
            <TableCell>
              <UserWrapper>
                <UserInitials>
                  {firstAndLast(row.name)}
                </UserInitials>
                <Label>
                  {row.name}
                </Label>
              </UserWrapper>
            </TableCell>
            <TableCell>
              <Label>
                {row.email.toLowerCase()}
              </Label>
            </TableCell>
            <TableCell>
              <Label>
                {row.phone}
              </Label>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <FooterWrapper>
      <Pagination count={10} color="primary" shape="rounded" size="small"/>
      <RowsPerPage currentNumber={10} total={200} />
    </FooterWrapper>
  </TableContainer>
  )
}

export default ContactTable