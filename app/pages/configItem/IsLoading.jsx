import classes from './Configitem.module.css';
import React from 'react';
function IsLoading(props)
{
    return(
    <div className={classes.IsLoadingBlock}>
      
      <img className={classes.IsLoading} src='/img/isload.gif'></img>
      <p className={classes.IsLoadingTxt}>{props.userN} зачекай я думаю! </p>
    </div>)
}
export default IsLoading