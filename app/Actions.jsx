
export const setUser = (event) => ({                    // Функція для встановлення користувача
  type: "SET_USER",
  event
});

export const exit = () => ({                            // Функція для виходу
  type: "EXIT",
});

export const login = () => ({                           // Функція для входу
  type: "LOGIN",
});


export const setStyle = (event) => ({                           // Функція для входу
  type: "SET_STYLE",
  event
});
export const setGenre = (event) => ({                           // Функція для входу
  type: "SET_GENRE",
  event
});

export const setStatr = (event) => ({                           
  type: "SET_START",
  event
});

export const newStor = () => ({                           
  type: "NEW_STOR",
});

export const setHistory = (event) => ({                           
  type: "SET_HISTORY",
  event
});

export const setHero = (event) => ({                           
  type: "SET_HERO",
  event
});