import React from 'react';
import './container.scss';

export default class Container extends React.Component{
    props;
    state = {
        title: '',
        class: ''
    }
    constructor(props){
        super(props);
        this.props = props;
        
        console.log(props)
    }
    componentDidMount(){
        if(this.props.props && this.props.props.class){
            this.setState({...this.state, class: this.props.props.class, ...this.props.props});
        }
    }

    render(){
        return (
            <div className={this.state.class+" jelly-container"} style={this.state.styles}>
                {this.state.title ? <div className="jelly-container-title">{this.state.title}</div> : <></>}
                {this.state.description ? <div className="jelly-container-description">{this.state.description}</div> : <></>}
                {this.props.children}
            </div>
        )
    }
}