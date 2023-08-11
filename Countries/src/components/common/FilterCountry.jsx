const FilterCountry=({setSelectedRegion,selectedRegion})=>{ 
    return ( 
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
    )
}
export default FilterCountry;