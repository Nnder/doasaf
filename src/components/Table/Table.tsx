import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';

export default function BasicTable({rows}: {rows: any[]}) {
  console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Учитель</TableCell>
            <TableCell align="right">Самолет</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.uid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.teacher.fio}
              </TableCell>
              <TableCell align="right">{row.tech.model}</TableCell>
              <TableCell align="right">{dayjs.unix(row.date.seconds || 0).format('YYYY-MM-DD HH:mm')}</TableCell>
              <TableCell sx={{
                color: ()=>{
                  switch(row.status){
                    case 'не пройдено':
                      return 'red'
                    case 'пройдено':
                      return 'green'
                    case 'перенесен':
                      return 'purple'
                    case 'отменен':
                      return 'orange'
                  }
                  return 'black'
                }
              }} align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}