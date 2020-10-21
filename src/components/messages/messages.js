import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

import Display from '../Display/display';
import './messages.css';

export default function Messages({messages,username}) {
    return (
        
            <ScrollToBottom className="messages">
                {messages.map((message,idx)=><div key={idx}>
                     <Display message={message} name={username}/>
                     </div>
            
            )}    


            </ScrollToBottom>
            
        
    )
}
