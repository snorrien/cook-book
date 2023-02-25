import React from 'react';
import { useDispatch } from 'react-redux';
import Introduction from './Introduction';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { useState } from 'react';

function Home() {

    const [tab, setTab] = useState('signUp');
    const [isAuth, setIsAuth] = useState(false);

    if (tab === "intro") {
        return (
            <div>
                <Introduction/>
            </div>
        )

    } else if (tab === "signUp"){
        return <SignUp setTab={setTab}/>
    } else if (tab === "logIn") {
        return <LogIn setTab={setTab}/>
    }

}

export default Home;