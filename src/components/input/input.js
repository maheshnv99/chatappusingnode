import React from 'react'
import './input.css';

export default function Input({message,setmessage,sender}) {
    return (
        <div>
            
            <form className="outerinputbox">
            <input className="inputtext" type="text" placeholder="Type a message..." value={message}
            onChange={event=>setmessage(event.target.value)} 
            onKeyPress={event=>event.key==='Enter'? sender(event) : null}/>
                
                <button className="send" onClick={event=>sender(event)}>->></button>
            </form>
           
        </div>
    )
}
