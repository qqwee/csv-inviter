import React, { Component } from 'react';
import styles from '../Session.module.css';

const ErrorScreen = () => {
    return (
        <div className={styles.errorScreen}>
            Sorry, we cannot find what you are looking for.
        </div>
    );
}

export default ErrorScreen;