import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from './AuthForm';
import "./Home-input.css";
import { userAdded } from "../../store/slices/usersSlice";
import { useLocation, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LogIn from './LogIn';


const SignUp = ({ setTab }) => {
  const dispatch = useDispatch();
  const { push } = useLocation();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(userAdded({
          email: user.email,
          uid: user.uid,
          accessToken: user.accessToken,
        }));
        setTab("intro");
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
          У меня уже есть аккаунт. <button onClick={() => setTab("logIn")} >Boйти.</button>
        </p>
      </div>
    </div>

  )
}

export default SignUp;