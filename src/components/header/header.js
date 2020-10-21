import React from 'react';
import './header.css';

export default function Header({room}) {
    return (
        <div className="outerheaderbox">
            <div className="left">
                <h3>{room}</h3>
                </div>
                <div className="right">
                <button className="exit"><a href='/'>x</a></button>
            </div>
        </div>
    )
}
