

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE": // Перезаписуємо поточний стан з даними з дії
      return {
        ...state,
        ...action.state,
      };
    case "SET_USER": // Встановлюємо дані користувача
      return {
        ...state,
        userName: action.event.userName,
      };
    case "SET_STYLE":
      return {
        ...state,
        style: action.event,
      };
    case "SET_HISTORY":
      return {
        ...state,
        history: action.event,
      };
    case "SET_GENRE":
      return {
        ...state,
        genre: action.event,
      };
    case "SET_START":
      return {
        ...state,
        start: action.event.start,
        start: true,
      };
    case "SET_HERO":
      let updatedHeroesList = null;
      const _isChecked = action.event.isChecked ? false : true;

      if (action.event.hero == "Hero") {
        updatedHeroesList = state.heroesList.map((hero) =>
          hero.name === action.event.name
            ? { ...hero, isChecked: _isChecked }
            : hero
        );
        return {
          ...state,
          heroesList: updatedHeroesList,
        };
      }
       else {
        updatedHeroesList = state.badHeroList.map((hero) =>
          hero.name === action.event.name
            ? { ...hero, isChecked: _isChecked }
            : hero
        );
        return {
          ...state,
          badHeroList: updatedHeroesList,
        };
      };
    case "EXIT": // Повертаємо початковий стан з очищеними даними користувача 
    const HeroesList_ = state.heroesList.map(hero => ({...hero, isChecked: false}));
    const BadHeroesList_ = state.badHeroList.map(hero => ({...hero, isChecked: false}));
      return {
        ...state,
        start:false,
        userName:"",
        style:"",
        genre:"",
        history:"",
       heroesList:HeroesList_,
      badHeroList:BadHeroesList_
      };
    case "NEW_STOR": 
    const HeroesList = state.heroesList.map(hero => ({...hero, isChecked: false}));
    const BadHeroesList = state.badHeroList.map(hero => ({...hero, isChecked: false}));
      return {
        ...state,
        style:"",
        genre:"",
        history:"",
        heroesList:HeroesList,
        badHeroList:BadHeroesList

      };

    default:
      return state;
  }
};

export default reducer;

