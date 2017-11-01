import React, { Component } from 'react';
import { CONSTANTS } from '../../config';
import './header.css';

export class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="title">
                    {CONSTANTS.TITLE}
                </div>
            </div>
        );
    }
}

export default Header;