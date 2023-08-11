import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IsDarkContext } from "../context/darkContext";
import CountrieCard from "../components/CountrieCard";
import SearchInput from "../components/common/SearchInput";
import FilterCountry from "../components/common/FilterCountry";
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
           <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
           <FilterCountry setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
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
