
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CountryData = ({ countryDetails }) => {
    const [bordersList, setBordersList] = useState([]);

    const saveBorderCountry = async (border) => {
        const countryResult = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${border}`).then((response) => { return response.data[0] });
        const borderExists = bordersList.some((country) => country === countryResult.name.common);
        if (borderExists) {
            return;
        }
        setBordersList((prevBorders) => [...prevBorders, countryResult.name.common]);
    }
    useEffect(() => {
        if (countryDetails.borders) {
            (countryDetails.borders).map(async (border) => {
                await saveBorderCountry(border);
            })
        }
    }, [countryDetails])
    return (
        <>
            <div className="  flex flex-col md:ml-[50px] ">
                <h5 className="my-8 md:pl-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {countryDetails?.name?.common}
                </h5>
                <div className="flex flex-col md:flex-row md:pl-10 ">
                    <div>
                        <div className="flex">
                            <p className="mb-3 font-bold text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                                Native name:
                            </p>
                            <p className="mb-3 font-normal text-xs ml-1 text-gray-700 dark:text-gray-400 dark:text-white">
                                {countryDetails.altSpellings !== undefined ? countryDetails.altSpellings[1] : "Native name doesn't exist in this country"}
                            </p>
                        </div>
                        <div className="flex">
                            <p className="mb-3 font-bold text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                                Population:
                            </p>
                            <p className="mb-3 font-normal ml-1 text-xs text-gray-700 dark:text-gray-400 dark:text-white">
                                {(countryDetails?.population)?.toLocaleString()}
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
                                Top Level Domain:
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
                                Euro
                            </p>
                        </div>
                        <div className="flex">
                            <p className="mb-3 md:pl-10 text-xs  font-bold text-gray-700 dark:text-gray-400 dark:text-white">
                                Languages :
                            </p>
                            <p className="mb-3 font-normal text-xs  ml-1 text-gray-700 dark:text-gray-400 dark:text-white">
                              English
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-8 md:pt-0 md:flex md:flex-row">
                    <div>
                        <p className="pt-2 mr-1  md:pl-10 text-xs  font-bold text-gray-700 dark:text-gray-400 dark:text-white">
                            Border Countries:
                        </p>
                    </div>
                    <div className="flex flex-wrap">
                        {bordersList.map((border, index) => (
                            <Link to={`/countrieDetails/${border}`}>
                                <a key={index} className="w-auto mx-1  md:ml-1 flex text center my-1 rounded-lg px-4 py-1   font-normal text-xs text-gray-500 dark:text-white bg-white hover:bg-gray-100   shadow-inner dark:bg-darkBlue dark:text-white dark:border-darkBlue">
                                    {border}
                                </a>
                            </Link>

                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}
export default CountryData;