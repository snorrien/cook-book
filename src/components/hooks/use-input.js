import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;
    const tooShortPass = valueIsValid < 6;

    const valueChangeHandler = (event) => {

        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        tooShortPass,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}
export default useInput;