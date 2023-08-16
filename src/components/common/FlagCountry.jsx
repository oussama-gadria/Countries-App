const FlagCountry=({countryDetails})=>{ 
    return ( 
        <> 
          <img
                className="w-full lg:pr-10 lg:w-[700px] lg:h-[380px] "
                src={countryDetails?.flags?.png}
                alt=""
              />
        </>
    )
}
export default FlagCountry;