import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import RootRef from '@material-ui/core/RootRef';
import Paper from '@material-ui/core/Paper';
import styles from './Uploader.module.css';

const Uploader = () => {
    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader();
    
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
          const binaryStr = reader.result;
          console.log(binaryStr);
        }

        acceptedFiles.forEach((file: any) => reader.readAsBinaryString(file))
    }, []);
    const {getRootProps, getInputProps} = useDropzone({accept: 'text/csv', onDrop});
    const {ref, ...rootProps} = getRootProps();
    return (
        <RootRef rootRef={ref}>
            <Paper {...rootProps} className={styles.root}>
            <input {...getInputProps()} />
            <p className={styles.text}>Drag 'n' drop some files here, or click to select files</p>
            </Paper>
        </RootRef>
    );
};

export default Uploader;
