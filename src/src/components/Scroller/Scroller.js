import React, { useRef } from 'react';
import './Scroller.scss';
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';

export default class Scroller extends React.Component{
    props;
    state = {
        children: [],
        index: 0,
        class: '',
        length: 0,
        heights: [],
        offsetTop: 0,
        screen_height: '',
        arrowDebouncer: null
        
    }
    scrollerRef;
    scrollFlag = true;
    scrollDebouncer;
    arrowDebouncer;
    constructor(props){
        super(props);
        this.props = props;
        
        console.log(props);
        this.scrollerRef = React.createRef();
    }
    componentDidMount(){
        this.setState({...this.state, ...this.props.props, children: this.props.children, length: this.props.children.length || 0});
        console.log('ref', this.scrollerRef);
        this.setScrollEvent();
        this.calculateHights();
    }

    calculateHights(){
        // typeof this.state.children === ''
        // this.state.children[this.state.index-1]
        console.log( this.state.children)
    }
    
    onScrollListener(event){
        if(!this.scrollDebouncer && !this.arrowDebouncer){
            // console.log('scroll listener', event)
            // this.scrollerRef.current.scrollTo(0, this.scrollerRef.current.offsetHeight);
            // this.setState({...this.state, index: 1});
            // this.scrollDebouncer = setTimeout(()=>{
            //     this.scrollDebouncer = null;
            // }, 500);
        }
    }
    setScrollEvent(){
        this.scrollerRef.current.removeEventListener('scroll', this.onScrollListener.bind(this));
        this.scrollerRef.current.addEventListener('scroll', this.onScrollListener.bind(this));
    }
    scrollContainerUp(evt){
        if(!this.arrowDebouncer){
            console.log('scrolling up', this.state.index);
            this.scrollFlag = false;
            this.scrollerRef.current.scrollTo(0, (this.state.index-1) * this.scrollerRef.current.offsetHeight);
            this.setState({...this.state, index: this.state.index-1});
            this.arrowDebouncer = setTimeout(()=>{
                this.setState({...this.state, arrowDebouncer: null})
                this.arrowDebouncer = null;
            }, 400);
            this.setState({...this.state, arrowDebouncer: this.arrowDebouncer})
        }
    }
    scrollContainerDown(evt){
        if(!this.arrowDebouncer){
            console.log('scrolling down', this.state.index);
            this.scrollFlag = false;
            this.scrollerRef.current.scrollTo(0, (this.state.index+1) * this.scrollerRef.current.offsetHeight);
            this.setState({...this.state, index: this.state.index+1});
            this.arrowDebouncer = setTimeout(()=>{
                this.setState({...this.state, arrowDebouncer: null})
                this.arrowDebouncer = null;
            }, 400);
            this.setState({...this.state, arrowDebouncer: this.arrowDebouncer})
        }

    }

    render(){
        console.log(this.state.children)
        return (
            <div className="scroller" ref={this.scrollerRef}>
                {this.state.children}
                {/* {this.state.index > 0 ? this.state.children[this.state.index-1] : <></>} */}
                {/* {this.state.children[this.state.index]} */}
                {/* {this.state.index < this.state.children.length-1 ? this.state.children[this.state.index+1] : <></>} */}

                {/* <div className={this.state.arrowDebouncer ? 'scroller-actions blur':'scroller-actions'}>
                    <div className={this.state.index != 0 ? "scroller-actions-up show bulge" : "scroller-actions-up"} onClick={this.scrollContainerUp.bind(this)}>
                        {this.state.index != 0 ? 
                                <CaretUpOutlined style={{ fontSize: '36px', color: '#fff'}} />
                            :   <></>}
                    </div>
                    <div className={this.state.index < this.state.length-1 ? "scroller-actions-down show bulge" : "scroller-actions-down"} onClick={this.scrollContainerDown.bind(this)}>
                        {this.state.index < this.state.length-1 ?
                                <CaretDownOutlined style={{ fontSize: '36px', color: '#fff'}}/>
                            :   <></>}
                    </div>
                </div> */}
            </div>
        )
    }
}