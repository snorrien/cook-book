import React, { useState } from "react";
import "./AuthForm.css";
import "./Home-input.css"
import useInput from "../hooks/use-input";

const AuthForm = ({ title, sendData }) => {

  // const [signUp, setSignUp] = useState('Регистрация');
  // const [signUpT, setSignUpT] = useState(true);
  // function changeType() {
  //   setSignUp(signUp === 'Регистрация' ? 'Вход' : 'Регистрация');
  //   setSignUpT(!(signUpT === true));
  // }


  let {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== "");

  let {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(value => value.trim() !== "");

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
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
    : 'form-control'

  const SendData = () => {
    sendData(enteredEmail, enteredPassword)
  }


  return (

    <div onSubmit={FormSignUp}>
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

        <input type='password'
          id='pass'
          placeholder="Пароль (6 символов и больше)"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}

        />
        {passwordInputHasError && (<p className="error-text">пароль не указан</p>)}
        {enteredPassword.length < 6 && enteredPassword.length >= 1 && (<p className="error-text">пароль слишком короткий</p>)}
      </div>
      <div className='form-actions'>
        <button className="ready" disabled={!formIsValid} onClick={SendData}>{title}</button>
      </div>
    </div>

  );
};

export default AuthForm;