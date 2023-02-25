import { useDispatch } from "react-redux";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";
import { setUser } from "../../store/slices/usersSlice";

const LogIn = ({ setTab }) => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
               
                setTab("intro");
            })
            .catch(console.log)
    }

    return (
        <div className="HomeContainer">
            <div className="EnterContainer">
                <AuthForm
                    title="Войти"
                    sendData={handleLogin}
                />
                 <p>
          У меня ещё нет аккаунта. <button onClick={() => setTab("signUp")} >Зарегистрироваться.</button>
        </p>
            </div>
        </div>
    )

}

export default LogIn;