import React from 'react';
import { useDispatch } from 'react-redux';
import Introduction from './Introduction';
import SignUp from './SignUp';
import { useState } from 'react';

function Home() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (isLoggedIn) {
        return (
            <div>
                <Introduction/>
            </div>
        )

    } else {
        return <SignUp setIsLoggedIn={setIsLoggedIn}/>
    }

}

export default Home;