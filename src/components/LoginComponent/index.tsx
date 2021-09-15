import React, { useState } from 'react'
import firebase from "firebase/compat/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


interface IProps {
    renderOrNot(dataFromChild: boolean): any
    connected(dataFromChild: boolean): any

}


const LoginComponent: React.FC<IProps> = ({ renderOrNot, connected }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleTextEmailChange = (e: any) => {
        console.log("text change:  " + e.target.value);
        setEmail(e.target.value);
    }

    const handleTextPasswordChange = (e: any) => {
        console.log("text change:  " + e.target.value);
        setPassword(e.target.value)

    }

    const handleClick = (e: any) => {
        e.preventDefault();
        console.log(email, password);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                connected(true)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                connected(false)
                setError("Erreur  " + errorCode + ": " + errorMessage)
            });
    }

    const handleClickRegister = (e: any) => {
        e.preventDefault()
        renderOrNot(true)
    }



    return (
        <div className="form-container">

            <form className="form">
                {error ? <div>{error}</div> : null}
                <div className="logo">
                    <img src="https://scontent.ftnr1-1.fna.fbcdn.net/v/t1.6435-9/53264589_2267046020229713_6469793500375285760_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFj9Q3IoRNutVAYFPyjwdnyNsw_AFpk_6w2zD8AWmT_rGlJPCgP8qGwUUqq0UGpKJ7k2fEUuRFbxeKNJkBBlZfT&_nc_ohc=8gtvVHLq1IMAX-acuwI&tn=3un6r4YEW2HiX6dQ&_nc_ht=scontent.ftnr1-1.fna&oh=46b4004d94ee6981fc04e2a5010e9314&oe=6160784C" alt="isspm logo" width="60px" height="60px" />
                </div>
                <h1 className="welcome">Bienvenue sur E-fandray</h1>
                <div className="input-email">
                    <input type="email" placeholder="Entrer votre email ..." onChange={handleTextEmailChange} />
                </div>
                <div className="input-password">
                    <input type="password" placeholder="Entrer votre mot de passe ..." onChange={handleTextPasswordChange} />
                </div>
                <div className="btn-container">
                    <button type="submit" className=" btn btn-primary btn-block " onClick={handleClick}>Se connecter</button>
                </div>
                <div>
                    Pas de compte? <a href="#" onClick={handleClickRegister}> S'inscrire</a>
                </div>
            </form>

        </div>
    )
}

export default LoginComponent
