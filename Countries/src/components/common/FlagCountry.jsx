const FlagCountry=({countryDetails})=>{ 
    return ( 
        <> 
          <img
                className=" md:h-[380px]  md:w-[700px] pr-10"
                src={countryDetails?.flags?.png}
                alt=""
              />
        </>
    )
}
export default FlagCountry;