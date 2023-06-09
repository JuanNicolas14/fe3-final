import { createContext, useReducer, useEffect, useContext } from "react";

const ContextGlobal = createContext();

const themes = {
  dark: {
      theme: true,
      bgColor: 'black',
      color: 'white'
  },
  light: {
      theme: false,
      bgColor: 'white',
      color: 'black'
  }
}

const initialApiState = []
const intialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const apiReducer = (state, action) => {
  switch(action.type){
      case 'GET_USERS':
          return action.payload
      default:
          throw new Error()
  }
}

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return themes.dark
      case 'SWITCH_LIGHT':
          return themes.light
      default:
          throw new Error()
  }
}

const favReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV':
          return [...state, action.payload]
      default:
          throw new Error()
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
  const [themeState, themeDispatch] = useReducer(themeReducer, intialThemeState)
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => apiDispatch({type: 'GET_USERS', payload: data}))
  }, [])
  

  return (
    <ContextGlobal.Provider value={{apiState, themeState, themeDispatch ,favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal)
