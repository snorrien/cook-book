import {useDispatch} from "react-redux";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";
import {setUser} from "../../store/slices/userSlice";

const LogIn = () => {
    const dispatch = useDispatch();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.log)
    }

    return (
        <AuthForm
            title="sign in"
            SendData={handleLogin}
        />
    )
}

export default LogIn;