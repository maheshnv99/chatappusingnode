import React from 'react'
import './display.css';
import ReactEmoji from 'react-emoji';
export default function Display({message,name}) {
    const trimname=name.trim().toLowerCase();
    let sendbycur = false;
    
    const {username,text}=message;
    if(username===trimname)sendbycur=true;
    return (
        sendbycur ?
        (
            <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{username}</p>
            <div className="messageBox backgroundBlue">
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
          )
          : (
            <div className="messageContainer justifyStart">
              <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
              </div>
              <p className="sentText pl-10 ">{username}</p>
            </div>
        )

    )
}
