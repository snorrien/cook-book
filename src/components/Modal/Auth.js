import React, {useState} from 'react';

function Auth(props) {

    const [switchName, setSwitchName] = useState('Регистрация');
    const [buttonName, setButtonName] = useState('Зарегистрироваться');

    function switchType() {
        setSwitchName(switchName === 'Регистрация' ? 'Вход' : 'Регистрация');
        setButtonName(buttonName === 'Зарегистрироваться' ? 'Войти' : 'Зарегистрироваться');
    }

    return (
        <div>
            <h1>{switchName}</h1>
            <div>
                <div>
                    {(props.email.isDirty && props.email.isEmpty) && <div style={{color: "red"}}>Почта не указана</div>}
                    {(props.email.isDirty && props.email.minLengthError) &&
                        <div style={{color: "red"}}>Некорректная длина</div>}
                    {(props.email.isDirty && props.email.emailError) &&
                        <div style={{color: "red"}}>Некорректная почта</div>}

                    <input onChange={e => props.email.onChange(e)} onBlur={e => props.email.onBlur(e)} value={props.email.value}
                           name="email"
                           type="text" placeholder="Почта"/>
                </div>
                <div>
                    {(props.password.isDirty && props.password.isEmpty) &&
                        <div style={{color: "red"}}>Пароль не указан</div>}
                    {(props.password.isDirty && props.password.minLengthError) &&
                        <div style={{color: "red"}}>Некорректная длина</div>}
                    <input onChange={e => props.password.onChange(e)} onBlur={e => props.password.onBlur(e)}
                           value={props.password.value}
                           name="password" type="password" placeholder="Пароль"/>
                </div>
            </div>
            <div className="buttons">
                <ul>
                    <li>
                        <button className="signIn" disabled={!props.email.inputValid} type="submit">{buttonName}</button>
                    </li>
                    <li>
                        <button onClick={switchType}>{switchName}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Auth;