import React from 'react';
import classes from './Stories.module.css';
import {  useNavigate } from 'react-router-dom';
function Stories (props) {
 
    const navigate = useNavigate();
  

  const Click=()=> {
    props.newStor()
    navigate("/config");
  }


    

    return (
      <div className={classes.StoriesBlock} >
         <h1 className={classes.StoriesTxt}>Казка - {props.style}</h1>
         <p className={classes.StoriesTxt} style={{ whiteSpace: 'pre-line' }}>{props.history}</p>
 
         <button onClick={Click} className={classes.request__button}>Нова історія</button>
      </div>
    );
  
}

export default Stories;
