import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import RootRef from '@material-ui/core/RootRef';
import Paper from '@material-ui/core/Paper';
import styles from './Uploader.module.css';
import Papa from 'papaparse';
import { bindActionCreators, Dispatch } from 'redux';
import { addInvitee } from '../session/session.actions';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

interface IProps {
  setInviteeList: (list: Invitee[]) => void;
}

const dataNormalizer = (results: Papa.ParseResult): Invitee[] => {
  return results.data.slice(1).map(r => ({
    id: uuidv4(),
    firstName: r[0],
    lastName: r[1],
    gender: r[2],
    emailAddress: r[3],
    phoneNumber: r[4],
  }));
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setInviteeList: addInvitee,
    },
    dispatch
  );

const Uploader = (props: IProps) => {
  const onDrop = useCallback(acceptedFiles => {
    if (!acceptedFiles[0].name.match(/.csv$/)) {
      alert('Are you sure you are importing a csv file?');
      return;
    }
    Papa.parse(acceptedFiles[0], {
      complete: results => {
        props.setInviteeList(dataNormalizer(results));
      },
      error: () => {
        alert('There was an error while reading your CSV file.');
      },
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'text/csv',
    onDrop,
  });
  const { ref, ...rootProps } = getRootProps();
  return (
    <RootRef rootRef={ref}>
      <Paper {...rootProps} className={styles.root}>
        <input {...getInputProps()} />
        <p className={styles.text}>
          Drag 'n' drop some files here, or click to select files
        </p>
      </Paper>
    </RootRef>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Uploader);
