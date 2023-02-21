import { useDispatch } from "react-redux";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";
import { setUser } from "../../store/slices/usersSlice";

const LogIn = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.log)
    }

    return (
        <div className="HomeContainer">
            <div className="EnterContainer">
                <AuthForm
                    title="Войти"
                    sendData={handleLogin}
                />
            </div>
        </div>
    )
        
}

export default LogIn;