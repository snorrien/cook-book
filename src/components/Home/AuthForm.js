import React, { useState } from "react";
import "./AuthForm.css";
import "./Home-input.css"
import useInput from "../hooks/use-input";
import HttpPost from "../Services/HttpPost"

const AuthForm = ({title}) => {

 // const [signUp, setSignUp] = useState('Регистрация');
 // const [signUpT, setSignUpT] = useState(true);
 // function changeType() {
 //   setSignUp(signUp === 'Регистрация' ? 'Вход' : 'Регистрация');
 //   setSignUpT(!(signUpT === true));
 // }


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(value => value.trim() !== "");

  let formIsValid = false;
  if ( enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const FormSignUp = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid) {
      return;
    }
  }

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const passwordInputClasses = passwordInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const SendData = () => {
    let data = {
      email: enteredEmail,
      password: enteredPassword
    }

  }


  return (
    <div className="HomeContainer">
      <div className="EnterContainer" onSubmit={FormSignUp}>
      <h2 id="heading">Регистрация</h2>
       
        <form className={emailInputClasses}>
          <input type='text'
            id='email'
            placeholder="Почта"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (<p className="error-text">почта не указана</p>)}
        </form>
        <div className={passwordInputClasses}>
          <div clasName="password-label">
            <input type='password'
              id='pass'
              placeholder="Пароль"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              minLength="6"
            />
            {passwordInputHasError && (<p className="error-text">пароль не указан</p>)}
          </div>
        </div>
        <div className='form-actions'>
          <button className="ready" disabled={!formIsValid} onClick={SendData}>{title}</button>
          <div>
            <button id="initial" >Вход</button>
            <button id="initial" >Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;