import React from 'react';
import './header.scss';

export default class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="header">
                <div className="heaader-nav">
                    <span className="hamburger"></span>
                </div>

                <div className="header-logo">
                    <span className="header-logo-container"><span className="jelly"></span></span>
                </div>

                <div className="header-about">
                    <span></span>
                </div>
            </div>
        );
    }
}