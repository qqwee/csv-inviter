import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styles from '../Session.module.css';

const Loading = () =>
    <div className={styles.loadingContainer}>
        <CircularProgress className={styles.loadingBar}/>
    </div>;

export default Loading;