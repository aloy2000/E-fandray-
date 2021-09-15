import React, { useEffect, useState } from 'react'
import LoginComponent from '../../components/LoginComponent'
import '../../App.css'
import RegisterComponent from '../../components/Register'
import { MessagePage } from '../MessagePage'
import firebase from "firebase/compat/app"
import "firebase/compat/database"
import { getAuth, onAuthStateChanged } from "firebase/auth";



const HomePage = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBVJmckoTaxIZExDiXPPyYVkG-PgcktGpw",
        authDomain: "ifandray.firebaseapp.com",
        projectId: "ifandray",
        storageBucket: "ifandray.appspot.com",
        messagingSenderId: "68101621221",
        appId: "1:68101621221:web:9948da5ef71f3c86331b0c",
        measurementId: "G-2MWFJ8DBJQ",
        databaseURL: "https://ifandray-default-rtdb.europe-west1.firebasedatabase.app/"

    };

    firebase.initializeApp(firebaseConfig);
    const database = firebase.database()
    const auth = getAuth();
    


    const [register, setRegisterOrLogin] = useState(false)
    const [connected, setConnected] = useState(false)

    //handle data from Child component (Login or Register)
    const handleCallBack = (dataFromChild: boolean) => {
        setRegisterOrLogin(dataFromChild)
    }

    const handleCallBackconnected = (dataFromChild: boolean) => {
        setConnected(dataFromChild)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setConnected(true)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    // element jsx
    if (register && !connected) {
        return (
            <RegisterComponent renderOrNot={handleCallBack} />

        )
    }
    else if (!register && !connected) {
        console.log("register:" + register)
        return (
            <LoginComponent renderOrNot={handleCallBack} connected={handleCallBackconnected} />
        )
    }
    else {
        return (
            <MessagePage connected={handleCallBackconnected}  />
        )
    }

}

export default HomePage
