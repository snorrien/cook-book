import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from './AuthForm';
import { setUser } from "../../store/slices/userSlice";
import { useLocation } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const { push } = useLocation();

  const handleRegister = (email, password) => {
    console.log("handleRegister");
    const auth = getAuth();
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
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
    <AuthForm
      title="Регистрация"
      sendData={handleRegister}
      wantAnother= "У меня уже есть аккаунт."
    />
    
  )
}

export default SignUp;