import "./MyRecipeItem.css";

const MyRecipeItem = (props) => {
    return (
            <div class="col-sm-4 ">
                <div class="card ">
                    
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.ingredients}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
    )
}

export default MyRecipeItem;