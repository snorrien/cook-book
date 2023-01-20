import React, { useEffect, useState } from 'react';
import "./Modal.css";
import Auth from "./Auth";

// Валидация двух хуков для модального окна
const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validation[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;

                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true)
                    break;

                case "isEmail":
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, emailError])

    return {
        isEmpty,
        minLengthError,
        emailError,
        inputValid,
    }
}


const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onBlur,
        onChange,
        isDirty,
        ...valid
    }
}

///Модальное окно
const Modal = ({ active, setActive, children }) => {

    const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true, });
    const password = useInput("", { isEmpty: true, minLength: 3 });

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modalContainer active" : "modalContainer"} onClick={e => e.stopPropagation()}>
                {children}
                <button className="closeModalBtn" onClick={() => setActive(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <Auth email={email} password={password} />
            </div>
        </div>
    );
};

export default Modal;