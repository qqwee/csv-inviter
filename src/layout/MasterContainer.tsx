import React, { Component } from 'react';
import Table from '../table/Table';
import styles from './MasterContainer.module.css';
import SearchBar from '../search/SearchBar';
import Fade from '@material-ui/core/Fade';
import Uploader from '../uploader/Uploader';

interface IProps {

}

interface IState {
    invitees: Intivee[];
}

class MasterContainer extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            invitees: [],
        }
    }
    public render() {
        const isListEmpty = this.state.invitees.length === 0;
        return (
            <div>
            <div className={styles.head}>
                <Fade in={false}>
                    <SearchBar className={styles.searchBar}></SearchBar>
                </Fade>
            </div>
            <div className={styles.root}>
                {
                    isListEmpty ? <Uploader/> : <Table/>
                }
            </div>
            </div>
        );
    }
}

export default MasterContainer;