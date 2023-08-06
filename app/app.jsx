import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./Reducer.jsx";
import AppView from "./AppView.jsx";
import { OPENAI_KEY } from  '../config/default.jsx'

const store = configureStore({ reducer });          //  Конфігуруємо Redux store за допомогою переданого редюсера
store.dispatch({                                    //  Диспетчеризуємо дію "SET_STATE" зі стартовим станом
  type: "SET_STATE",
  state: {
    openaiKay:OPENAI_KEY,
    start:false,
    pageMain:'/userpage',
    userName:"",
    style:"",
    genre:"",
    history:"",
   heroesList:[
    {
      name: "Бетмен",
      img:"img/Batman.png",
      isChecked:false,
    },
    {
      name: "Венум",
      img:"img/venum.png",
      isChecked:false,
    },
    {
      name: "Людина павук",
      img:"img/spiderman.png",
      isChecked:false,
    },
    {
      name: "Довгостріл",
      img:"img/peas.png",
      isChecked:false,
    },
    {
      name: "Горіх",
      img:"img/nut.png",
      isChecked:false,
    },
    {
      name: "Соняшник",
      img:"img/sunflower.png",
      isChecked:false,
    },
    
  ],
  badHeroList:[
    {
      name: "Джокер",
      img:"img/joker.png",
      isChecked:false,
    },
     {
      name: "Зомбі",
      img:"img/zombie.png",
      isChecked:false,
    },
    {
      name: "Паровозик Томас",
      img:"img/thomas.png",
      isChecked:false,
    },
     {
      name: "Хагіваги",
      img:"img/hagiwaghi.png",
      isChecked:false,
    },
    {
      name: "Сирено Головий",
      img:"img/SirenHead.png",
      isChecked:false,
    },
    {
      name: "Танус",
      img:"img/tanus.png",
      isChecked:false,
    },
  ]
  },
});


const rootElement = (                              // Елемент rootElement з використанням StrictMode, який надає обмеження на попередження під час розробки
  <React.StrictMode>
    <Provider store={store}>   {/* Обгортка для передачі Redux store усередині дерева компонентів */}
      <AppView/> {/* Відображення головного компоненту AppView */}
    </Provider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById("container")); // Створюємо корінь додатка з використанням елементу з id "container"
root.render(rootElement);                                      // Рендеримо елемент rootElement в кореневий DOM-вузол
