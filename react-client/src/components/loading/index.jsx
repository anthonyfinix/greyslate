import React from 'react';
import classes from './loading.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

let Loading = () => {
    return (
        <div className={`${classes.wrapper}`} >
            <CircularProgress />
        </div >
    )
}

export default Loading;