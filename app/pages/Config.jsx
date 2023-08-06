import React, { useState } from "react";
import classes from '../pages/configItem/Configitem.module.css';
import {  useNavigate } from 'react-router-dom';
import Hero from '../pages/configItem/Hero.jsx';
import { Configuration, OpenAIApi } from "openai"
import IsLoading from '../pages/configItem/IsLoading.jsx'
function Config(props) {
    const configuration = new Configuration({
      apiKey: props.openaiKay,
    });
    const [isLoading, setIsLoading] = useState(false);
    const openai = new OpenAIApi(configuration);
    const navigate = useNavigate();


    const [genreError, setGenreError] = useState("");
    const [styleError, setStyleError] = useState("");
    const [Errors, setErrors] = useState("");
    
    const CheckFill = () => {
      if (props.genre === "") {
        setGenreError("Оберіть жанр!");
        setErrors("Оберіть жанр!");
        return false;
      } else {
        setErrors("");
        setGenreError("");
      }
      if (props.style === "") {
        setStyleError("Оберіть назву!");
        setErrors("Оберіть назву!");
        return false;
      } else {
        setErrors("");
        setStyleError("");
      }
      return true;
    };

  const onChangeGenre = (e) => {
    setGenreError("");
    props.setGenre(e.target.value);
  };

  const onChangeStyle = (e) => {
    setStyleError("");
    props.setStyle(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
if(CheckFill())
{
  setIsLoading(true); // Увімкнути анімацію
  // Відбираємо об'єкти з isChecked === true і витягуємо їх імена
  const checkedbadHeroes = props.badHeroList
    .filter(hero => hero.isChecked)
    .map(hero => hero.name);
  const resultbadHeroes = checkedbadHeroes.join(', ');

  // Відбираємо об'єкти з isChecked === true і витягуємо їх імена
  const checkedHeroes = props.heroesList
    .filter(hero => hero.isChecked)
    .map(hero => hero.name);
  const resultHeroes = checkedHeroes.join(', ');

  const config =`Привіт створи мені казку жанр ${props.genre} із назвою ${props.style} , щоб там були такі герої, як головний герой ${props.userName} та  ${resultHeroes} і такі лиходії ${resultbadHeroes}. Ця казка для діток від 3 до 7 років (в казці повинно бути багато жартів та багато епічних битв героїв з антигероями і обов'язково повинні бути всі герої)`
  const conversation = [ { role: "user", content: config }];

try{
  const response= await openai.createChatCompletion(
   {
       model:"gpt-3.5-turbo",
       messages: conversation
   }
    )
      props.setHistory(response.data.choices[0].message.content);
      setIsLoading(false); // Вимкнути анімацію
}
catch(e)
{
   console.log('Error while gpt chat', e.message)
} 

   navigate("/history");
}
  };

  return isLoading ? (
    <IsLoading userN={props.userName} />
  ) : (
    <form onSubmit={handleSubmit} className={classes.mainBlock}>
      <div id="CreateError"></div>
      <div className={classes.itemMainBlock1}>
        <div className={classes.item1}>
          <label className={classes.txt_0}>Жанри</label>
          <select
            onChange={onChangeGenre}
            id="Genre_Cr"
            className="form-control str"
          >
            <option value="">Оберіть жанр</option>
            <option value="жахи">жахи</option>
            <option value="веселі">веселі</option>
            <option value="солодких снів">солодких снів</option>
          </select>
          <span id="Genre_CrError" className="text-danger">
            {genreError}
          </span>
        </div>
        <div className={classes.item1}>
          <label className={classes.txt_0}>Назви</label>
          <select
            onChange={onChangeStyle}
            id="Style_Cr"
            className="form-control str"
          >
            <option value="">Оберіть Назву</option>
            <option value="Подорож у Загублений Галактичний Ліс.">
              Подорож у Загублений Галактичний Ліс.
            </option>
            <option value="Чарівний Камінь і Вимкнене Сонце: Війна Магії та Технологій.">
              Чарівний Камінь і Вимкнене Сонце: Війна Магії та Технологій.
            </option>
            <option value="Останній Ворожий Замок на Планеті Драконів.">
              Останній Ворожий Замок на Планеті Драконів.
            </option>
            <option value="Машина Часу в Руках Дітей: Пригоди в Минулому та Майбутньому.">
              Машина Часу в Руках Дітей: Пригоди в Минулому та Майбутньому.
            </option>
            <option value="Легенда про Химерного Авіатора та Летючий Острів.">
              Легенда про Химерного Авіатора та Летючий Острів.
            </option>
            <option value="Міфічне Зіткнення Землі та Обіймів: Громадяни Магічних та Технологічних Світів.">
              Міфічне Зіткнення Землі та Обіймів: Громадяни Магічних та
              Технологічних Світів.
            </option>
            <option value="Заперечний Шлях до Гравітаційної Чорної Діри.">
              Заперечний Шлях до Гравітаційної Чорної Діри.
            </option>
            <option value="Відданий Розум: Штучний Інтелект у Пошуках Емоцій.">
              Відданий Розум: Штучний Інтелект у Пошуках Емоцій.
            </option>
            <option value="Пригоди Космічного Мандрівника та Розмовляючого Робота.">
              Пригоди Космічного Мандрівника та Розмовляючого Робота.
            </option>
            <option value="Чарівний Кришталевий Ліс: Змішання Магії й Науки в Боротьбі за Легендарний Артефакт.">
              Чарівний Кришталевий Ліс: Змішання Магії й Науки в Боротьбі за
              Легендарний Артефакт.
            </option>
          </select>
          <span id="Style_CrError" className="text-danger">
            {styleError}
          </span>
        </div>
      </div>
      <h5 className={classes.txt_1}>Оберіть героїв та лиходіїв</h5>
      <div className={classes.itemMainBlock2}>
        <div>
          {props.heroesList.map((item, index) => (
            <Hero
              item={item}
              key={index + 1}
              setHero={props.setHero}
              Hero="Hero"
            />
          ))}
        </div>
        <div>
          {props.badHeroList.map((item, index) => (
            <Hero
              item={item}
              key={index + 1}
              setHero={props.setHero}
              Hero="badHero"
            />
          ))}
        </div>
      </div>
      <span  className="text-danger">
        {Errors}
      </span>
      <input className={classes._button} type="submit" value="Створити" />

     
    </form>
  );
}

export default Config;




