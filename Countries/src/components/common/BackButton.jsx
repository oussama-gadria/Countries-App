import { useNavigate } from "react-router-dom";
import ArrowLeftSvg from "../../assets/svg/ArrowLeftSvg";
const BackButton=()=>{ 
const navigate = useNavigate();
const back = () => {
        navigate("/");
};
return( 
        <> 
        <div>
          <button
            type="button"
            className=" ml-10  flex items-center  py-2 px-6 mr-2  text-sm font-medium bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg shadow dark:bg-darkBlue dark:text-white dark:border-darkBlue"
            onClick={back}
          >
           <ArrowLeftSvg/>
            Back
          </button>
        </div> 
        </>
    )
}
export default BackButton;