import React from 'react';
import * as db from '../data/home';
import './Home.scss';

export  default class extends React.Component{
    constructor(params){
        super(params)
        this.state = {
            loading: false,
            data: db.homeData.data
        };
    }

    componentDidMount(){
    }

    onCardClick(e){
        window.open(e, '_self')
    }

    render(){
        return (
            <div className="p-home">
                {
                    this.state.loading 
                        ? 
                        <div className="p-home-loading">loading</div> 
                        : 
                        <div className="p-home-container">
                            {
                                this.state.data.map((data, i)=>{
                                    return (
                                        <div key={i} className={`p-home-card ${data.background}`} onClick={this.onCardClick.bind(this, data.path)}>
                                            {data.showCount
                                                ? <div className="p-home-card-count">{data.count}</div>
                                                : <></>}
                                            <div className="p-home-card-content">
                                                <span className="p-home-card-title">{data.title}</span>
                                                {
                                                    data.description.map((desc, i)=>{
                                                        return (<p key={i} className="p-home-card-description">{desc}</p>)
                                                    })
                                                }
                                            </div>
                                            <div className="p-home-card-arrow">
                                                <span className="arrow-icon"></span>
                                            </div>
                                            {data.footer_text
                                                ? <div className="p-home-card-footer">{data.footer_text}</div>
                                                : <></>}
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        )
    }
}