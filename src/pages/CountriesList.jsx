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
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filterCountries = () => {
    const filteredList = data.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    const filtredWithRegion=filteredList.filter((country) =>
    country.region.toLowerCase().includes(selectedRegion.toLowerCase())
  );
    setSearchCountry(filtredWithRegion);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const sortedData = response.data.sort((a, b) => {
        const countryA = a.name.common.toUpperCase();
        const countryB = b.name.common.toUpperCase();
        if (countryA < countryB) {
          return -1;
        }
        if (countryA > countryB) {
          return 1;
        }
        return 0;
      });
      setData(response.data);
      setSearchCountry(sortedData);
    });
  }, []);
  


  useEffect(() => {
    filterCountries();
  }, [searchValue,selectedRegion]);


  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-veryLightGray dark:bg-veryDarkBlue">
        <div className="container mx-auto">
          <div className="flex md:flex-row  flex-col mx-3 justify-between pt-10 pb-8 ">
           <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
           <FilterCountry setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 mx-3">
            {searchCountry.map((countrie,index) => (
              <CountrieCard key={index} data={data} countrie={countrie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
