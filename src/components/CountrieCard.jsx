import { useContext } from "react";
import { Link } from "react-router-dom";
import { IsDarkContext } from "../context/darkContext"; 
import "../styles/Country.css"
const CountrieCard = ({ countrie }) => {
  const isDarkMode = useContext(IsDarkContext);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-white rounded overflow-hidden shadow-lg mx-7 mb-14 dark:bg-darkBlue dark:text-white dark:border-darkBlue">
        <Link to={`/countrieDetails/${countrie.name.common}`}>
          <div className="aspect-ratio-container">
            <img src={countrie.flags.png} alt="Country Flag" />
          </div>
        </Link>
        <div className="px-6 py-4">
          <Link to={`/countrieDetails/${countrie.name.common}`}>
            <div className="font-bold text-lg mb-2">{countrie.name.common}</div>
          </Link>
          <div className="flex items-center mb-2 pt-2">
            <div className="font-bold text-xs mr-1">Population :</div>
            <p className="text-gray-700 text-xs text-base">{(countrie.population).toLocaleString(undefined,{maximumFractionDigits: 0})}</p>
          </div>
          <div className="flex items-center mb-1">
            <div className="font-bold text-xs mr-2">Region :</div>
            <p className="text-gray-700 text-xs text-base">{countrie.region}</p>
          </div>
          <div className="flex items-center pt-1">
            <div className="font-bold text-xs mr-1">Capital :</div>
            <p className="text-gray-700 text-xs text-base">{countrie.capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrieCard;