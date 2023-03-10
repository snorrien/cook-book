import "./MyRecipeItem.css";

const MyRecipeItem = (props) => {
    return (
        <div className="card-rapper">
            <div className="card ">
                <div className="column">
                    <div className="card-img"></div>
                </div>

                <div className="column">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.ingredients}</p>
                        <button>Go somewhere</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyRecipeItem;