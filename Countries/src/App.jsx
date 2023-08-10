
import './App.css';
import Navbar from "./components/Navbar.jsx"
import CountriesList from "./components/CountriesList.jsx";
import { Route, Routes } from 'react-router-dom';
import CountrieDetails from './components/CountrieDetails';
import { useState } from 'react';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div class={isDarkMode ? "dark" : ""}>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route
          path='/'
          element={<CountriesList setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />}>
        </Route>
        <Route
          path='/countrieDetails/:countrieName'
          element={<CountrieDetails setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />}
        >
        </Route>
      </Routes>
    </div>
  )
}

export default App
