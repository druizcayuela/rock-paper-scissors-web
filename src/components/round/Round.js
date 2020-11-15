import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'firstPlayerChoice', label: 'PLAYER ONE', minWidth: 100 },
  { id: 'secondPlayerChoice', label: 'PLAYER TWO', minWidth: 100 },
  { id: 'result', label: 'RESULT', minWidth: 170 }
];

function createData(firstPlayerChoice, secondPlayerChoice, result) {
  return { firstPlayerChoice, secondPlayerChoice, result };
}

const rows = [
  createData('Rock', 'Paper', '2st Player win'),
  createData('Rock', 'Scissors', '1st Player win'),
  createData('Rock', 'Rock', 'Draw'),
  createData('Rock', 'Paper', '2st Player win'),
  createData('Rock', 'Scissors', '1st Player win'),
  createData('Rock', 'Rock', 'Draw'),
  createData('Rock', 'Paper', '2st Player win'),
  createData('Rock', 'Scissors', '1st Player win'),
  createData('Rock', 'Rock', 'Draw'),
  createData('Rock', 'Paper', '2st Player win'),
  createData('Rock', 'Scissors', '1st Player win'),
  createData('Rock', 'Rock', 'Draw'),
  createData('Rock', 'Paper', '2st Player win'),
  createData('Rock', 'Scissors', '1st Player win'),
  createData('Rock', 'Rock', 'Draw'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 300,
  },
});

export default function Round() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
									  console.log('Nuflo: ' + JSON.stringify(row));

              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}