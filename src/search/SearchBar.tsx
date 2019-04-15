import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import styles from './SearchBar.module.css';

const SearchBar = (props: any) => {
  return (
    <Paper className={props.className} elevation={1}>
      <IconButton className={styles.iconButton} aria-label="Search">
        <Icon>search</Icon>
      </IconButton>
      <InputBase className={styles.input} placeholder="Search through your list" />
      <Button variant="outlined" color="default" className={styles.button} onClick={()=>console.log('clicked')}>
        Send out invitations
        <Icon className={styles.icon}>send</Icon>
      </Button>
    </Paper>
  );
}

export default SearchBar;