import React from "react";
import classes from './Configitem.module.css';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  Click = () => {

    const date = {
        isChecked: this.props.item.isChecked,
        name: this.props.item.name,
        hero:this.props.Hero
      };
    this.props.setHero(date)
  };



  render() {
    let background_ = this.props.item.isChecked ? "greenyellow" : "none";
    return (
      <div style={{background:background_}} className={classes.heroBolock} onClick={this.Click}>
        <div>
          <label className={classes.nameHero} htmlFor="checkbox2">{this.props.item.name}</label>
        </div>

          <img 
            className={classes.imageHero}
            src={this.props.item.img}
            alt={this.props.item.name}
          />

      </div>
    );
  }
}

export default Hero;
