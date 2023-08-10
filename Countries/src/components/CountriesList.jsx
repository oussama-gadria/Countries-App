import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IsDarkContext } from "../context/darkContext"
import CountrieCard from "./CountrieCard.jsx";
const CountriesList = () => {
  const isDarkMode = useContext(IsDarkContext);
  const [data, setData] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const filterCountries = () => {
    const filteredList = data.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchCountry(filteredList);
  };
  const filterCountriesWithRegion = () => {
    const filtredCountries = data.filter((country) =>
      country.region.toLowerCase().includes(selectedRegion.toLowerCase())
    );
    setSearchCountry(filtredCountries);
  };
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
      setSearchCountry(response.data);
    });
  }, []);

  useEffect(() => {
    filterCountries();
  }, [searchValue]);

  useEffect(() => {
    filterCountriesWithRegion();
  }, [selectedRegion]);

  return (
    <div className={isDarkMode ? "dark" : ""}> 
      <div className="bg-veryLightGray dark:bg-veryDarkBlue ">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col mx-3 justify-between pt-10 pb-8 md:pr-7 ">
          <form >
            <div className="relative mx-7 md:flex-1">
              <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                <svg
                  className="w-3 h-3 text-darkGray dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="h-[42px] w-full md:w-[400px] pl-14 text-gray-900 text-xs rounded-lg bg-gray-50 dark:border-darkBlue dark:placeholder-gray-400 dark:text-white dark:bg-darkBlue"
                placeholder="Search for a country ..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                required
              />
            </div>
          </form>
          <div className="relative inline-block pt-8 pl-7 md:pb-3 md:pt-0 md:pl-0">
            <div className="relative inline-block ">
              <select
                className="block appearance-none text-xs bg-white  pr-10 pl-6  py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline dark:bg-darkBlue dark:text-white dark:border-darkBlue"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                <svg className="w-3 h-3 text-gray-400 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 mx-3">
          {searchCountry.map((countrie) => (
            <CountrieCard data={data} countrie={countrie} />
          ))}
        </div>
      </div>

    </div>
    </div>
    
  );
};

export default CountriesList;
