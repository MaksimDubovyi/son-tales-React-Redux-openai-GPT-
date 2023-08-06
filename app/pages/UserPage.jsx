import React from 'react';
import classes from './page.module.css';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
     
  let display = "none";
  if (this.props.ifExit) {
    display = "block";
  }
    return (
      
      <div style={{width:"100% "}}>
         <h1 style={{marginLeft:"30% ", marginTop:"20%"}} className={classes.hiTxt}>Казки від тата</h1>
      </div>
    );
  }
}

export default UserPage;
