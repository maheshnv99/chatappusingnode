
import React,{useState} from 'react';

import {Link} from 'react-router-dom';
import './login.css';


export default function Login() {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');





    return (
        <div className="outsidebox">
            <div className="insidebox">
                <h2 className="heading">Sign in</h2>
                <input className="inputname" placeholder="Username" type="text" onChange={(event)=>setusername(event.target.value)} />
                <input className="inputpassword mt-30" placeholder="password" type="password" onChange={(event)=>setpassword(event.target.value)} />
                <Link onClick={(event)=> (!username || !password) ? event.preventDefault():null } to={`/chat?username=${username}&password=${password}`}>
                <button className="signinbut mt-30"type="submit">Login</button>
                
                </Link>

            </div>
        </div>
    )
}

