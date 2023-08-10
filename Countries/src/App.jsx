
import './App.css';
import Navbar from "./components/Navbar.jsx"
import CountriesList from "./components/CountriesList.jsx";
import { Route, Routes } from 'react-router-dom';
import CountrieDetails from './components/CountrieDetails';
import { useReducer } from 'react';
import { IsDarkContext } from "./context/darkContext"
function App() {
  const [DarkMode,dispatch] = useReducer(darkReducer,false);
  function handleDarkMode(state){ 
    dispatch({ 
     isDarkMode:state
    })
  }
  return (
    <IsDarkContext.Provider value={DarkMode}>
          <Navbar onDarkMode={handleDarkMode} />
          <Routes>
            <Route
              path='/'
              element={<CountriesList />}>
            </Route>
            <Route
              path='/countrieDetails/:countrieName'
              element={<CountrieDetails />}
            >
            </Route>
          </Routes>
    </IsDarkContext.Provider>

  )
}
function darkReducer(DarkMode){ 
     if(DarkMode){ 
      return false;
     }else{ 
      return true;
     }
}
export default App
