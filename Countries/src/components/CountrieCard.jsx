import { Link } from "react-router-dom";

const CountrieCard = ({ countrie }) => {
  
  return (
    <>
      <div className="bg-white rounded overflow-hidden shadow-lg mx-7 mb-14 dark:bg-darkBlue dark:text-white dark:border-darkBlue">
        <Link to={`/countrieDetails/${countrie.name.common}`}>
        <img className="h-64 md:h-48 md:w-auto" src={countrie.flags.png} alt="Mountain" />
        </Link>
        <div className="px-6 py-4">
          <Link to={`/countrieDetails/${countrie.name.common}`}>
          <div  className="font-bold text-lg mb-2">{countrie.name.common}</div>
          </Link> 
          <div className="flex items-center mb-2 pt-2">
            <div className="font-bold text-xs mr-1">Population :</div>
            <p className="text-gray-700 text-xs text-base">{countrie.population}</p>
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
    </>
  );
};

export default CountrieCard;