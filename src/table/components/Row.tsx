import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { removeInvitee, updateInvitee } from '../../session/session.actions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
interface IProps {
  invitee: Invitee;
  removeInvitee: (id: string) => any;
  updateInvitee: (invitee: Invitee) => any;
}

interface IState {
  invitee: Invitee;
  isSelected: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      removeInvitee,
      updateInvitee,
    },
    dispatch
  );

class Row extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      invitee: props.invitee,
      isSelected: false,
    };
  }

  public render() {
    const { removeInvitee, updateInvitee } = this.props;
    const { isSelected, invitee } = this.state;
    return (
      <TableRow hover={true} selected={isSelected}>
        <TableCell>
          <Input
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            disableUnderline
            value={invitee.firstName || ''}
            onChange={this.createHandleChange('firstName')}
          />
        </TableCell>
        <TableCell>
          <Input
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            disableUnderline
            value={invitee.lastName || ''}
            onChange={this.createHandleChange('lastName')}
          />
        </TableCell>
        <TableCell>
          <Input
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            disableUnderline
            value={invitee.gender || ''}
            onChange={this.createHandleChange('gender')}
          />
        </TableCell>
        <TableCell>
          <Input
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            disableUnderline
            value={invitee.emailAddress || ''}
            onChange={this.createHandleChange('emailAddress')}
          />
        </TableCell>
        <TableCell>
          <Input
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            disableUnderline
            value={invitee.phoneNumber || ''}
            onChange={this.createHandleChange('phoneNumber')}
          />
        </TableCell>
        <TableCell padding="checkbox">
          {this.isInviteeEdited() ? (
            <IconButton
              aria-label="Update"
              onClick={() => updateInvitee(invitee)}
            >
              <Icon>done</Icon>
            </IconButton>
          ) : (
            <IconButton
              aria-label="Delete"
              onClick={() => removeInvitee(invitee.id)}
            >
              <Icon>delete</Icon>
            </IconButton>
          )}
        </TableCell>
      </TableRow>
    );
  }
  private handleOnFocus = () => {
    this.setState({ isSelected: true });
  };

  private handleOnBlur = () => {
    this.setState({ isSelected: false });
  };

  private createHandleChange = (key: string) => (e: any) => {
    e.persist();
    this.setState(prevState => ({
      invitee: {
        ...prevState.invitee,
        [key]: e.target.value,
      },
    }));
  };

  private isInviteeEdited = () => {
    const currentInvitee = this.state.invitee;
    const originalInvitee = this.props.invitee;
    return !this.areEqualShallow(currentInvitee, originalInvitee);
  };

  private areEqualShallow = (a: any, b: any) => {
    for (let key in a) {
      if (!(key in b) || a[key] !== b[key]) {
        return false;
      }
    }
    for (let key in b) {
      if (!(key in a)) {
        return false;
      }
    }
    return true;
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Row);
