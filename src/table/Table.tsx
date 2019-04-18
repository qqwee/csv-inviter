import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Table.module.css';
import Row from './components/Row';
import { connect } from 'react-redux';

interface IProps {
  invitee: Invitee[];
}

const mapStateToProps = (state: any) => ({
  invitee: state,
});

const SimpleTable = (props: IProps) => {
  const { invitee } = props;
  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.head}>
            <TableCell className={styles.tableCell}>First Name</TableCell>
            <TableCell className={styles.tableCell}>Last Name</TableCell>
            <TableCell className={styles.tableCell}>Gender</TableCell>
            <TableCell className={styles.tableCell}>Email Address</TableCell>
            <TableCell className={styles.tableCell}>Phone Number</TableCell>
            <TableCell className={styles.tableCell} />
          </TableRow>
        </TableHead>
        <TableBody>
          {invitee.map(i => (
            <Row key={i.id} invitee={i} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default connect(mapStateToProps)(SimpleTable);
