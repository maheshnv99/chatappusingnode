
import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './chat.css';
import Header from '../header/header';
import Messages from '../messages/messages';
import Input from '../input/input';

let socket;

const url="https://chatappusingnode.herokuapp.com/";

export default function Chat({location}) {

    const [username,setuser]=useState('');
    const [password,setroom]=useState('');
    const [message,setmessage]=useState('');
    const [messagearray,setmessagearray]=useState([]);
    

    /*initial setup*/
    useEffect(()=>{
        const {username,password}=queryString.parse(location.search);
        
        socket=io(url);
        setuser(username);
        setroom(password);
        
        socket.emit('greet',{username,password},(error)=>{
            if(error){
            alert(error);
            }
        });

    },[url,location.search]);
    
    
    /*message handling */
    useEffect(()=>{

        socket.on('message',(message)=>{

            setmessagearray([...messagearray,message]);


        }

        )

    }



    ,[messagearray]);
    

    const sender = (event) =>{
        event.preventDefault();
        if (message){
            socket.emit('sendmessage',message,()=>{setmessage('')});

        }
       
        

    }



    return (
        <div className="outsidechatbox">
            <div className="insidechatbox">
                <Header room={password} />
                <Messages messages={messagearray} username={username}/>
                <Input  message={message} setmessage={setmessage} sender={sender} />
               
               
           

            </div>
        </div>
    )
}

