import React, { useState } from "react";
import "./SignUp.css";
import "./Home-input.css"
import useInput from "../hooks/use-input";
import HttpPost from "../Services/HttpPost"

const SignUp = (props) => {

  
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

  const SendData= () => {
    let data =  {
      name: enteredName,
      email: enteredEmail ,
      password: enteredPassword
    }
  
  HttpPost(data);
  }
  
  
  return (
    <div className="HomeContainer">
    <div className="EnterContainer" onSubmit={FormSignUp}>
      <form className={nameInputClasses}>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          />
          <label for='name'>Имя</label>
        {nameInputHasError && (<p className="error-text">имя не указано</p>)}
      </form>
      <form className={emailInputClasses}>
        <input type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          />
          <label for='email'>Почта</label>
          {emailInputHasError && (<p className="error-text">почта не указана</p>)}  
      </form>
      <div className={passwordInputClasses}>
        <label for='pass'>Пароль (6 символов минимум)</label>
        <div clasName="password-label">
          <input type='password'
            id='pass'
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword} 
            minlength="6"
          />
          <i class="far fa-eye"></i>
          {passwordInputHasError && (<p className="error-text">пароль не указан</p>)}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} onClick = {SendData}>Войти</button>
      </div>
      </div>
      </div>
  );
};

export default SignUp;