import GlassSearchSvg from "../../assets/svg/GlassSearchSvg";


const SearchInput = ({setSearchValue,searchValue}) => {
    return (
        <>
            <form >
                <div className="relative mx-7 md:flex-1">
                    <GlassSearchSvg/>
                    <input
                        type="search"
                        id="default-search"
                        className="h-[42px] w-full md:w-[400px] pl-14 text-gray-900 text-xs rounded-lg bg-gray-50 dark:border-darkBlue dark:placeholder-gray-400 dark:text-white dark:bg-darkBlue"
                        placeholder="Search for a country ..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        required
                    />
                </div>
            </form>
        </>
    )
}
export default SearchInput;