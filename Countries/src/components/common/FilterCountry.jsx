import React, { useState } from 'react';
import "../../styles/Country.css";

const FilterCountry = ({ setSelectedRegion, selectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRegion = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className='mx-7 pt-8 md:pt-0'>
        <button
          type="button"
          className="inline-flex w-48   justify-between  rounded-md bg-white px-3 py-3 text-xs font-normal text-gray-900 shadow-sm  ring-gray-300 hover:bg-gray-50 dark:border-darkBlue dark:placeholder-gray-400 dark:text-white dark:bg-darkBlue"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          {selectedRegion ? selectedRegion : "Filter by Region"}
          <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 15 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute mx-7 md:right-0 z-10 mt-1 w-48  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-darkBlue dark:placeholder-gray-400 dark:text-white dark:bg-darkBlue" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" >
          <div className="py-1" role="none">
            <a className="text-gray-700 block px-4 py-1 text-xs cursor-pointer" role="menuitem" tabIndex="-1" onClick={() => selectRegion("")}>Filter by Region</a>
            <a className="text-gray-700 block px-4 py-1 text-xs cursor-pointer" role="menuitem" tabIndex="-1" onClick={() => selectRegion("Africa")}>Africa</a>
            <a className="text-gray-700 block px-4 py-1 text-xs cursor-pointer" role="menuitem" tabIndex="-1" onClick={() => selectRegion("America")}>America</a>
            <a className="text-gray-700 block px-4 py-1 text-xs cursor-pointer" role="menuitem" tabIndex="-1" onClick={() => selectRegion("Asia")}>Asia</a>
            <a className="text-gray-700 block px-4 py-1 text-xs cursor-pointer" role="menuitem" tabIndex="-1" onClick={() => selectRegion("Europe")}>Europe</a>
            <a className="text-gray-700 block px-4 py-1 text-xs cursor-pointer" role="menuitem" tabIndex="-1" onClick={() => selectRegion("Oceania")}>Oceania</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterCountry;





