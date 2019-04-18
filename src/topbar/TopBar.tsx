import React from 'react';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import styles from './TopBar.module.css';
import { addInvitee, removeInvitee } from '../session/session.actions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import uuidv4 from 'uuid/v4';

interface IProps {
  disabled: boolean;
  className: any;
  addInvitee: (invitee: Invitee[]) => any;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addInvitee,
      removeInvitee,
    },
    dispatch
  );

const TopBar = (props: IProps) => {
  return (
    <Paper className={props.className} elevation={1}>
      <Button
        disabled={props.disabled}
        variant="outlined"
        color="default"
        className={styles.buttonLeft}
        onClick={() => props.addInvitee([{ id: uuidv4() }])}
      >
        Add new employee
        <Icon className={styles.icon}>add</Icon>
      </Button>
      <Button
        disabled={props.disabled}
        variant="outlined"
        color="default"
        className={styles.buttonRight}
        onClick={() =>
          console.log(
            'Here we can do a POST request with axios or fetch, passing the list of invitees'
          )
        }
      >
        Send out invitations
        <Icon className={styles.icon}>send</Icon>
      </Button>
    </Paper>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(TopBar);
