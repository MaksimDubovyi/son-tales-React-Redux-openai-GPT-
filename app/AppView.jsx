import React from "react";
import { connect } from "react-redux";
import {setHistory,setHero, setUser,exit,setStyle,setGenre,setStatr,newStor } from "./Actions.jsx";     // Імпортуємо різні дії з файлу Actions.jsx
import AppRouter from "./components/AppRouter.jsx";            // Імпортуємо компонент AppRouter з папки components

class AppView extends React.Component {                        // Класовий компонент AppView

  render() {  

    let display = this.props.start ? "none":"block";
    return (
      <div style={{display:"flex"}}>
        <img style={{display}} className="imgSpiderMan" src="/img/spiderman.png"></img>
        <AppRouter    {...this.props} />  {/* Відображаємо компонент AppRouter з переданими пропсами */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {                             // Функція, яка мапить стан Redux до пропсів компонента
    return {
      openaiKay:state.openaiKay,
      start:state.start,
      pageMain:state.pageMain,
      userName: state.userName,
      style:state.style,
      genre:state.genre,
      history:state.history,
      heroesList:state.heroesList,
      badHeroList:state.badHeroList,
    };

};

// З'єднуємо компонент AppView з Redux store та передаємо дії (actions) як пропси
export default connect(mapStateToProps, {newStor,setHistory,setHero,setUser,exit,setStyle,setGenre,setStatr })(AppView);