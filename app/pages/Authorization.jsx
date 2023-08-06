import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import classes from './page.module.css';
const Authorization = ({setUser}) => 
{
  const [UserName, setUserName] = useState("");
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const CheckFill = () => {
    if (UserName === "") {
      setNameError("Поле має бути встановлене!");
      return false;
    } else {
      setNameError("");
    }
    return true;
  };

    
 const handleSubmit = (e) => {
   e.preventDefault();

   if (CheckFill()) {

         let data = {
          userName:UserName,
         };
          setUser(data);

         navigate("/config");
    
   }
 };

    return (
      <div className="row" style={{position: "fixed", top:"40%",textAlign: "center",width:"100%"}}>
        <div className="col-md-4 offset-md-4">
          <form onSubmit={handleSubmit}>
            <div id="CreateError" className="text-danger"></div>
            <div className="form-group">
              <label className="control-label lable">Введіть ім'я дитини</label>
              <input onChange={(e) => setUserName(e.target.value)} id="Name_Cr" className="form-control str" />
              <span className="text-danger">{nameError}</span>
            </div>
 
            <div style={{ margin: "20px" }} className="form-group">
              <input className={classes.request__button} type="submit" value="Авторизація"  />
            </div>
          </form>

          <div style={{ margin: "20px" }} ><Link to="/userpage" className='txtMenu' style={{ color: 'red', padding: "0px 68px" }}><i className="bi bi-box-arrow-left" style={{ margin: "10px" }}></i>головна</Link></div>
        </div>
      </div>
    );

};

export default Authorization;
