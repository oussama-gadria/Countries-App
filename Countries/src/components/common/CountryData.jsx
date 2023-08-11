const CountryData = ({countryDetails}) => {
    return (
        <>
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
        </>
    )
}
export default CountryData;