import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { IsDarkContext } from "../context/darkContext"; 
import BackButton from "../components/common/backButton";
import CountryData from "../components/common/CountryData";
import FlagCountry from "../components/common/FlagCountry";
const CountrieDetails = () => {
  const isDarkMode = useContext(IsDarkContext);
  const { countrieName } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    console.log(countrieName);
    axios
      .get(`https://restcountries.com/v3.1/name/${countrieName}?fullText=true`)
      .then((response) => {
        setCountryDetails(response.data[0]);
      });
  }, []);

  
  return (
    <div className={isDarkMode ? "dark" : ""}> 
      <div className="md:h-screen  dark:bg-veryDarkBlue">
      <div className="container mx-auto pt-8 ">
       <BackButton/>
        <div className="flex pt-8 mx-10 ">
          <div
            href="#"
            className="bg-white rounded-lg   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-veryDarkBlue"
          >
            <div className="flex flex-wrap md:flex-nowrap ">
             <FlagCountry countryDetails={countryDetails}/>
             <CountryData countryDetails={countryDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default CountrieDetails;
