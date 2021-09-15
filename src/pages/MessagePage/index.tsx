import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { getAuth, signOut } from "firebase/auth";
import Search from '../../components/SearchComponent';
import { useId } from "react-id-generator";


interface IProps {
    connected(dataFromChild: boolean): any
}

const randomNumber = () => {
    return Math.floor(Math.random() * (1000000 - 3 + 1)) + 3;
}

const previousAllMessage: any = []

export const MessagePage: React.FC<IProps> = ({ connected }) => {
    const auth = getAuth()
    const db = getDatabase();
    const id = useId()
    const [message, setMessage] = useState('');
    const [destinataire, setDestinataire] = useState('')
    const [allMessage, setAllMessage] = useState({})

    useEffect(() => {

        set(ref(db, 'Users/' + randomNumber()), {
            nom: "nirina",
            email: auth.currentUser?.email,
            profile: "test@gmail.com"
        });
        const starCountRef = ref(db, 'Message/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            //previousAllMessage.push(data)
            console.log("data: " + typeof (previousAllMessage))
            setAllMessage(data)

        });
        Object.entries(allMessage).forEach(

            ([key, value]) => {
                console.log("value: ", value)
                previousAllMessage.push(value)

            }
        )
    }, [])


    const handleDestChange = (e: any) => {
        setDestinataire(e.target.value)
    }
    const handleMessageChange = (e: any) => {
        setMessage(e.target.value)

    }
    const sendMessage = (e: any) => {
        console.log("send message")
        e.preventDefault()
        set(ref(db, 'Message/' + randomNumber()), {
            message: message,
            destinataire: destinataire,
            senBY: auth.currentUser?.email,
            time: new Date().getDate()
        })

        const starCountRef = ref(db, 'Message/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log("snapshot: " + snapshot.val())
            previousAllMessage.push(data)
            setAllMessage(data)
        });

        Object.entries(allMessage).forEach(

            ([key, value]) => {
                console.log("value: ", value)
                previousAllMessage.push(value)

            }
        )

        console.log("previous data: ", previousAllMessage)

    }

    return (
        <div className="container">
            <div className="page-title">
                <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <h5 className="title">E-fandray</h5>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
                </div>
            </div>
            <div className="content-wrapper">


                <div className="row gutters">

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                        <div className="card m-0">
                            <div className="row no-gutters">

                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                    <div className="selected-user">
                                        <span>To: <span className="name">Emily Russell</span></span>
                                        <span style={{ textAlign: "right" }}>
                                            <a href="#" onClick={(e: any) => {
                                                e.preventDefault()
                                                const auth = getAuth()
                                                auth.signOut()
                                                    .then(() => {
                                                        console.log("deconnexion")
                                                        connected(false)
                                                    })
                                                    .catch((err) => console.log("erreur de deconnexion: " + err))
                                            }}>deconnexion</a>
                                        </span>
                                    </div>
                                    <div className="chat-container">
                                        <ul className="chat-box chatContainerScroll">
                                            <li className="chat-left">
                                                <div className="chat-avatar">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                    <div className="chat-name">Russell</div>
                                                </div>
                                                <div className="chat-text">Message fonafona?
                                                    <br />Messge</div>
                                                <div className="chat-hour">08:57 <span className="fa fa-check-circle"></span></div>
                                            </li>
                                            {
                                                previousAllMessage.map(function (msg: any) {
                                                    return (
                                                        <li className="chat-right" key={msg.keys}>
                                                            <div className="chat-avatar">
                                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                                <div className="chat-name"> {msg.email} </div>
                                                            </div>
                                                            <div className="chat-text">{msg.message}  </div>
                                                            <div className="chat-hour">{msg.time} <span className="fa fa-check-circle"></span></div>
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                        <form className="form-group mt-3 mb-0">
                                            <div className="chat-search-box">
                                                <div className="input-group">
                                                    <input className="form-control" placeholder="Entrer votre message..." value={message} onChange={handleMessageChange} />
                                                    <div className="input-group-btn">
                                                        <button type="submit" onClick={sendMessage} className="btn btn-info">
                                                            <i className="fa fa-2x fa-send"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}


/*
    deconnexion
    <a href="#" onClick={(e: any) => {
                e.preventDefault()
                const auth = getAuth()
                auth.signOut()
                    .then(() => {
                        console.log("deconnexion")
                        connected(false)
                    })
                    .catch((err) => console.log("erreur de deconnexion: " + err))
            }}>deconnexion</a>
*/