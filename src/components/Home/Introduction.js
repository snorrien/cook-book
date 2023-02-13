import "./Introduction.css";

const Introduction = () => {
    return (
        <div className="home-intro">
            <div className='page-title'>
                <h1> Твоя поваренная книга</h1>
            </div>
            <div className="ideas">
                <div className="card-idea">
                    <div className="box-idea item--1">
                        <span className="text">Сохраняй</span>
                    </div>
                    <div className="box-idea item--1">
                        <span className="text">Пробуй</span>
                    </div>
                    <div className="box-idea item--1">
                        <span className="text">Делись</span>
                    </div>
                </div>
            </div >

            <button id="initial">Вход</button>
            <button id="initial">Регистрация</button>
        </div >

    )
};

export default Introduction;