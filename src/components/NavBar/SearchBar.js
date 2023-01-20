import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="search-bar">
            <form className="search-form">
                <input required="" type="text"  autocomplete="off" />
                <label for="name">Поиск</label>
            </form>
        </div>
    )
}

export default SearchBar;