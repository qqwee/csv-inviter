import React from 'react';
import Table from '../table/Table';
import styles from './MasterContainer.module.css';
import TopBar from '../topbar/TopBar';
import Uploader from '../uploader/Uploader';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addInvitee, updateInvitee } from '../session/session.actions';

interface IProps {
  invitee: Invitee[];
}

const mapStateToProps = (state: any) => ({
  invitee: state,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addInvitee,
      updateInvitee,
    },
    dispatch
  );

const MasterContainer = (props: IProps) => {
  const isListEmpty = props.invitee.length === 0;
  return (
    <div>
      <div className={styles.head}>
        <TopBar disabled={isListEmpty} className={styles.searchBar} />
      </div>
      <div className={styles.root}>
        {isListEmpty ? <Uploader /> : <Table />}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterContainer);
