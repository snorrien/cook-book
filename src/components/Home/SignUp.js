import React, { useState } from "react";
import "./SignUp.css";
import "./Home-input.css"
import useInput from "../hooks/use-input";
import HttpPost from "../Services/HttpPost"

const SignUp = () => {

  const [signUp, setSignUp] = useState('Регистрация');
  const [signUpT, setSignUpT] = useState(true);
  function changeType() {
    setSignUp(signUp === 'Регистрация' ? 'Вход' : 'Регистрация');
    setSignUpT(!(signUpT === true));
  }

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== "");

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
  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const FormSignUp = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
  }

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const passwordInputClasses = passwordInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const SendData = () => {
    let data = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword
    }

    HttpPost(data);
  }


  return (
    <div className="HomeContainer">
      <div className="EnterContainer" onSubmit={FormSignUp}>
      <h2 id="heading">{signUp}</h2>
        <form className={nameInputClasses}>
          <input
            type='text'
            id='name'
            placeholder="Имя"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (<p className="error-text">имя не указано</p>)}
        </form>
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
              minlength="6"
            />
            {passwordInputHasError && (<p className="error-text">пароль не указан</p>)}
          </div>
        </div>
        <div className='form-actions'>
          <button className="ready" disabled={!formIsValid} onClick={SendData}>Готово!</button>
          <div>
            <button id="initial" onClick={changeType}>Вход</button>
            <button id="initial" onClick={changeType}>Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;