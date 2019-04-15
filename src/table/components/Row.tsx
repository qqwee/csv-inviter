import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Input from '@material-ui/core/Input';

interface IProps {
    invitee: Intivee;
};

interface IState {
    invitee: Intivee;
};

class Row extends Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            invitee: props.invitee,
        }
    }

    public render() {
        const { invitee } = this.props;
        return (
            <TableRow hover={true}>
                <TableCell><Input disableUnderline defaultValue={invitee.firstName}/></TableCell>
                <TableCell><Input disableUnderline defaultValue={invitee.lastName}/></TableCell>
                <TableCell><Input disableUnderline defaultValue={invitee.gender}/></TableCell>
                <TableCell><Input disableUnderline defaultValue={invitee.emailAddress}/></TableCell>
                <TableCell><Input disableUnderline defaultValue={invitee.phoneNumber}/></TableCell>
            </TableRow>
        );
    }
}

export default Row;
