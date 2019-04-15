import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Table.module.css';
import Row from './components/Row';

interface IProps {

}

let id = 0;

const createData =
(
    firstName?: string,
    lastName?: string,
    gender?: string,
    emailAddress?: string,
    phoneNumber?: string
): Intivee => {
    id += 1;
    return {
        id,
        firstName,
        lastName,
        gender,
        emailAddress,
        phoneNumber
    };
}

let rows: Intivee[] = [];

for (let i = 0; i < 10; i++) {
    rows.push(createData('Felix', 'Gast', 'M', 'fgdorian@gmail.com'));
}

function SimpleTable(props: IProps) {

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
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map(row => (
                <Row key={row.id} invitee={row}/>
            ))}
            </TableBody>
        </Table>
        </Paper>
    );
}
  
export default SimpleTable;