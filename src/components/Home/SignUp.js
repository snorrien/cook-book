import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from './AuthForm';
import "./Home-input.css";
import { setUser } from "../../store/slices/userSlice";
import { useLocation, Link } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const { push } = useLocation();

  const handleRegister = (email, password) => {
    console.log("handleRegister");
    const auth = getAuth();
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        push("/")
      })
      .catch(console.error)


  }

  return (
    <div className="HomeContainer">
      <div className="EnterContainer">

        <AuthForm
          title="Регистрация"
          sendData={handleRegister}
        />
        <p>
          У меня уже есть аккаунт. <Link to="/login">Войти.</Link>
        </p>
      </div>
    </div>

  )
}

export default SignUp;