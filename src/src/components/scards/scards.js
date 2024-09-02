import React from 'react';
import './scards.scss';
import {CalendarFilled} from '@ant-design/icons';

export default class SCards extends React.Component{
    cards = [];
    

    constructor(props){
        super(props);
        this.state = {
            animate: false,
            cards: [],
            title: '',
            loaded: false,
            mainclass: '',
            active: '',
            onclick: (e)=>{}
        }
    }

    componentDidMount(){
        console.log('SCARDS', this.state);
        if(!this.state.loaded){
            this.setState({...this.state, 
                ...this.props.props, 
                animate: this.props.props.animate, 
                cards: this.props.props.data, 
                title: this.props.props.title, 
                mainclass: this.props.props.mainclass,
                loaded: true,
                onclick: this.props.props.onclick
            });
        }
    }

    componentDidUpdate(){
        
    }

    onCardClick(selectedCard){
        this.setState({
            ...this.state,
            cards: this.state.cards.map((card, i)=>{
                if(card.id === selectedCard.id) return {...card, active: true};
                return {...card, active: false};
            })
        });
        console.log(this.state.cards)
        this.state.onclick(selectedCard);
    }

    render(){
        return (
            <div className={`${this.state.animate ? 'scards animate' : 'scards'} ${this.state.mainclass || ''}`}>
                {this.state.title ? (
                    <div className="scards-title">
                        <span>{this.state.title}</span>
                    </div>) : <></>}
                <div className="scards-wrapper">
                    {this.state.cards.map((card, i)=>{
                        return (
                        <div key={i} className={card.active ? 'scards-box active': 'scards-box'} onClick={(()=>{this.onCardClick(card)}).bind()}>
                            <div className="scards-box-upper">
                                <div className="scards-box-icon">
                                    <span className={card.iconClass}></span>
                                </div>
                                <div className="scards-box-title">
                                    <div className="label">{card.label}</div>
                                    <div className="sub"><span className={(card.iconClass || '') + ' sub-icon l-hide'}></span><span className="sub-company">{card.company}</span></div>
                                </div>
                            </div>
                            <div className="scards-box-lower">
                                {!card.startDate ? <></> : 
                                    <div className="scards-calander">
                                        <CalendarFilled style={{fontSize: '16px', color: '#fff'}} className='scards-calander-icon p_icon_s'/>
                                        <span className="calander-details scards-calander-details">{card.startDate} - {card.endDate}</span>
                                    </div>
                                }
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}