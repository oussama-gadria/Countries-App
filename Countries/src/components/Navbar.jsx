import { useContext } from "react";
import { IsDarkContext } from "../context/darkContext"
import MoonSvg from "../assets/svg/MoonSvg";
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
                <MoonSvg/>
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