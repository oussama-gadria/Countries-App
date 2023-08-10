import { useContext } from "react";
import { IsDarkContext } from "../context/darkContext"
const Navbar = ({onDarkMode}) => {
  const isDarkMode = useContext(IsDarkContext);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className=" bg-white dark:bg-darkBlue">
        <nav className="container mx-auto ">
          <div className="flex mx-10 justify-between h-16">
            <div className="flex items-center flex-grow">
              <div>
                <span className="font-bold text-lg dark:text-white ">Where in the world ?</span>
              </div>
            </div>
            <div className="flex items-center mx-1">
              <a
                className="text-black h-9 px-2 hover:bg-gray-700 hover:bg-veryDarkBlue hover:text-white rounded-md text-sm font-medium flex items-center dark:text-white dark:hover:bg-white dark:hover:text-darkBlue"
                onClick={onDarkMode}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                Dark Mode
              </a>
            </div>
          </div>
        </nav>
      </div>

    </div>

  );
}

export default Navbar;