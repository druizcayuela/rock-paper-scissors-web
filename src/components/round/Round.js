import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from "react-redux";

const columns = [
  { id: 'firstPlayerChoice', label: 'PLAYER ONE', minWidth: 100 },
  { id: 'secondPlayerChoice', label: 'PLAYER TWO', minWidth: 100 },
  { id: 'result', label: 'RESULT', minWidth: 170 }
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 300,
    minHeight: 300,
  },
});

export default function Round() {
  const classes = useStyles();
  const rows = useSelector(state => state.roundResult.roundsPlayed);
  let id=0; // Definetly, it's  not the best way to work with React's Reconciliation Algorithm...

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
			  id++;
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                  {columns.map((column) => {
					id++;
                    const value = row[column.id];
                    return (
                      <TableCell key={id} align={column.align}>
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