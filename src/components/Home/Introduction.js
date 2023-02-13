import "./Introduction.css";

const Introduction = () => {
    return (
        <div className="home-intro">
            <div className='page-title'>
                <h1> Твоя поваренная книга</h1>
            </div>
            <div>
                <div className="card-idea">
                    <div className="box-idea">
                        <img className="img-ideas" src="/img/icons8-greek-salad-100.png" alt="salad" />
                        <span className="text">Сохраняй</span>
                    </div>
                    <div className="box-idea">
                        <img className="img-ideas" src="/img/favicon.ico" alt="egg" />
                        <span className="text">Пробуй</span>
                    </div>
                    <div className="box-idea">
                        <img className="img-ideas" src="/img/icons8-pancake-stack-100.png" alt="pancake" />
                        <span className="text">Делись</span>
                    </div>
                </div>
                <button id="initial">Вход</button>
                <button id="initial">Регистрация</button>
            </div>
        </div >

    )
};

export default Introduction;