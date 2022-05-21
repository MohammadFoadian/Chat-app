
import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { useHistory, useNavigate } from 'react-router-dom';
import { ChatEngine } from "react-chat-engine";
import axios from 'axios';

// Components
import Navbar from './Navbar';

// Styles
import styles from "./Chats.module.css"

// Context
import { AuthContext } from '../context/AuthContextProvider';

const Chat = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/");
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                
                "project-id": "5569e367-0a17-4838-8d62-c11ac5df1ef9",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            'private-key': 'a20f33d7-f87d-4197-8592-a905f6f00c7d'
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                    
                })
        })

    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/")
    }

    if (!user || loading) return "Loading..."

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />

            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="5569e367-0a17-4838-8d62-c11ac5df1ef9"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chat;