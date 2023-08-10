import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IsDarkContext } from "../context/darkContext"
const CountrieDetails = () => {
  const isDarkMode = useContext(IsDarkContext);
  const { countrieName } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(countrieName);
    axios
      .get(`https://restcountries.com/v3.1/name/${countrieName}?fullText=true`)
      .then((response) => {
        setCountryDetails(response.data[0]);
      });
  }, []);

  const back = () => {
    navigate("/");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}> 
      <div className=" h-screen  dark:bg-veryDarkBlue">
      <div className="container mx-auto pt-8 ">
        <div>
          <button
            type="button"
            className=" ml-10  flex items-center  py-2 px-6 mr-2  text-sm font-medium bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg shadow dark:bg-darkBlue dark:text-white dark:border-darkBlue"
            onClick={back}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Back
          </button>
        </div>
        <div className="flex pt-8 mx-10 ">
          <div
            href="#"
            className="bg-white rounded-lg   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-veryDarkBlue"
          >
            <div className="flex flex-wrap md:flex-nowrap ">
              <img
                className="md:h-[380px]  md:w-[700px] pr-10"
                src={countryDetails?.flags?.png}
                alt=""
              />
              <div className=" flex flex-col md:ml-[50px] ">
                <h5 className="my-8 md:pl-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {countryDetails?.name?.common}
                </h5>
                <div className="flex flex-col md:flex-row md:pl-10 ">
                  <div>
                    <div className="flex">
                      <p className="mb-3 font-bold text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                        Native Name :
                      </p>
                      <p className="mb-3 font-normal text-xs ml-1 text-gray-700 dark:text-gray-400 dark:text-white">
                        Saudi arabia
                      </p>
                    </div>
                    <div className="flex">
                      <p className="mb-3 font-bold text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                        Population:
                      </p>
                      <p className="mb-3 font-normal ml-1 text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                        {countryDetails?.population}
                      </p>
                    </div>

                    <div className="flex">
                      <p className="mb-3 font-bold text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                        Region :
                      </p>
                      <p className="mb-3 font-normal ml-1 text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                        Region: {countryDetails?.region}
                      </p>
                    </div>

                    <div className="flex">
                      <p className="mb-3 font-bold text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                        Sub Region :
                      </p>
                      <p className="mb-3 font-normal ml-1 text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                        {countryDetails?.subregion}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="mb-3 font-bold text-xs  text-gray-700 dark:text-gray-400 dark:text-white">
                        Capital :
                      </p>
                      <p className="mb-12 font-normal text-xs ml-1 text-gray-700 dark:text-gray-400 dark:text-white">
                        {countryDetails?.capital}
                      </p>
                    </div>
                  </div>
                  <div className="  md:pl-[75px]">
                    <div className="flex ">
                      <p className="mb-3 md:pl-10 text-xs font-bold text-gray-700 dark:text-gray-400 dark:text-white">
                        Top Level Domain :
                      </p>
                      <p className="mb-3 font-normal text-xs  ml-1 text-gray-700 dark:text-gray-400 dark:text-white" >
                        {countryDetails?.fifa}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="mb-3 md:pl-10 text-xs  font-bold text-gray-700 dark:text-gray-400 dark:text-white">
                        Currencies :
                      </p>
                      <p className="mb-3 font-normal text-xs  ml-1 text-gray-700 dark:text-gray-400 dark:text-white">
                        euro
                      </p>
                    </div>
                    <div className="flex">
                      <p className="mb-3 md:pl-10 text-xs  font-bold text-gray-700 dark:text-gray-400 dark:text-white">
                        Languages :
                      </p>
                      <p className="mb-3 font-normal text-xs  ml-1 text-gray-700 dark:text-gray-400 dark:text-white">
                        Arabic
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-8 md:pt-0 md:flex md:flex-row items-center">
                  <div>
                    <p className="mb-3 pt-2 md:pl-10 text-xs  font-bold text-gray-700 dark:text-gray-400 dark:text-white">
                      Border Countries :
                    </p>
                  </div>
                  <div className="w-[90px] md:w-auto">
                    <p className="md:ml-6 flex items-center py-1 px-6 mr-2 font-normal text-xs text-gray-500 dark:text-white bg-white hover:bg-gray-100  rounded-lg shadow-xl dark:bg-darkBlue dark:text-white dark:border-darkBlue">
                      France
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    

  );
};
export default CountrieDetails;
