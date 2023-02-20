import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="search-bar">
            <form className="search-form">
                <input required=""
                    type="text"
                    autoComplete="off"
                placeholder="Поиск"/>
            </form>
        </div>
    )
}

export default SearchBar;