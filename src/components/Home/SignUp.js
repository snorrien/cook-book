import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from './AuthForm';
import { setUser } from "../../store/slices/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.log)
  }                           


  return (
    <AuthForm
      title="register"
      SendData={handleRegister}
    />
  )
}

export default SignUp;