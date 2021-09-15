import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


interface IProps {
    renderOrNot(dataFromChild: boolean): any
}

const RegisterComponent: React.FC<IProps> = ({ renderOrNot }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pseudo, setPseudo] = useState('')


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
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user: " + user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const handlePseudoChange = (e: any) => {
        setPseudo(e.target.value)
    }

    const handleClickLogin = (e: any) => {
        e.preventDefault()
        renderOrNot(false)
    }


    return (
        <div className="form-container">
            <form className="form">
                <div className="logo">
                    <img src="https://scontent.ftnr1-1.fna.fbcdn.net/v/t1.6435-9/53264589_2267046020229713_6469793500375285760_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFj9Q3IoRNutVAYFPyjwdnyNsw_AFpk_6w2zD8AWmT_rGlJPCgP8qGwUUqq0UGpKJ7k2fEUuRFbxeKNJkBBlZfT&_nc_ohc=8gtvVHLq1IMAX-acuwI&tn=3un6r4YEW2HiX6dQ&_nc_ht=scontent.ftnr1-1.fna&oh=46b4004d94ee6981fc04e2a5010e9314&oe=6160784C" alt="isspm logo" width="60px" height="60px" />
                </div>
                <h1 className="welcome">Bienvenue sur Ifandray</h1>
                <div className="input-email">
                    <input type="email" placeholder="Entrer votre email ..." style={{ backgroundColor: "#E8F0FE" }} autoComplete="off" onChange={handleTextEmailChange} value={email} />
                </div>
                <div className="input-email">
                    <input type="text" placeholder="Entrer votre pseudo ..." value={pseudo} style={{ backgroundColor: "#E8F0FE" }} autoComplete="off" onChange={handlePseudoChange} />
                </div>
                <div className="input-password">
                    <input type="password" autoComplete="off " placeholder="Entrer votre mot de passe ..." onChange={handleTextPasswordChange} value={password} />
                </div>
                <div className="btn-container">
                    <button type="submit" className=" btn btn-primary btn-block " onClick={handleClick}>S'inscrire</button>
                </div>
                <div>
                    J'ai déjà un compte? <a href="#" onClick={handleClickLogin}> Se connecter</a>
                </div>
            </form>

        </div>
    )
}

export default RegisterComponent
