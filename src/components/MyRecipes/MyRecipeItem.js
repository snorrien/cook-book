import "./MyRecipeItem.css";

const MyRecipeItem = (props) => {
    return (
        <div className="card-rapper">
            <div className="card ">
                <div className="card-body">
                    <div class="image-card"><span class="text">This is a chair.</span></div>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.ingredients}</p>
                    <button>Go somewhere</button>
                </div>
            </div>
        </div>
    )
}

export default MyRecipeItem;