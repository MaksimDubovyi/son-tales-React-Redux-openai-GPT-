import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  let display = "none";
  let start = "";
  let color = "green";

  if (props.userName !== "") {
    display = "block";
    start = "Вихід";
    color = "red";
  } else {
    start = "Вхід";
  }
  const handleClick = () => {
    if (start === "Вихід") {
      props.exit();
    }
  };

  return (
    <div className="headerContainer">
      <div className="headItem">
        <Link
          className="textHeaderContainer"
          onClick={handleClick}
          to="/authorization"
        >
          <i
            className="bi bi-door-open-fill"
            style={{ margin: "10px", color: color }}
          ></i>
          {start}
        </Link>
      </div>

      <div className="headItem">
        <p className="textHeaderContainer" style={{ display }}>
          Привіт - <span>{props.userName}</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
