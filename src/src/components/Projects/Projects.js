import React from 'react';
import './Projects.scss';
import SCards from '../scards/scards';
import {skills} from '../../data/skills';

export default class Projects extends React.Component{
    state={
        project: projects[0]
    }
    constructor(props){
        super(props);
    }
    onExpItemClicked(evt){
        console.log(evt);
        this.setState({...this.state, project: evt});
    }

    render(){
        console.log('skills:::::', skills, this.state.project.skills)
        return(
            <div className="projects-container">
                <SCards props={{data: projects, onclick: this.onExpItemClicked.bind(this)}} />
                <div className="project">
                    <div className="project-content">
                        <div className="project-images"></div>
                        <div className="project-details">
                            <h2>{this.state.project.label}</h2>
                            <div className="project-company">
                                <span className={(this.state.project.iconClass || '')}></span>
                                <span className="company">{this.state.project.company}</span>
                            </div>

                            <div className="project-description">
                                {this.state.project.description.map((desc, i)=>{
                                    return (<div className="project-description-point point" key={i}>{desc}</div>)
                                })}
                            </div>

                            <div className="project-skills">
                                {this.state && this.state.project.skills && this.state.project.skills.map((skill,i)=>{
                                    return (
                                        <div className="chip bulge" key={i}>
                                            {
                                            skills[skill] 
                                            ? 
                                                <><span className={skills[skill].icon + " chip-icon"}></span>
                                                <span className="chip-label">{skills[skill].label}</span></>
                                            :
                                                <span className="chip-label">{skill}</span>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }

    getSkillObject(skill){
        return {
            icon: skill,
            label: skill
        }
    }
}

export class Chip extends React.Component{
    state = {
        icon: '',
        label: ''
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('CHIP', this.props.props, this.state);
        this.state = this.setState({label: this.props.props, icon: this.props.props});
    }
    render(){
        return(
            <div className="chip">
                <span className={this.state.icon + " chip-icon"}></span>
                <span className="chip-label">{this.state.label}</span>
            </div>
        )
    }
}
const projects = [{
    id: 'project_01',
    iconClass: 'gs-logo',
    label: 'Gainsight Assist - Chrome Extension for Gmail & Outlook Add-in',
    company: 'Gainsight Inc',
    startDate: '02 March 2021',
    endDate: 'current',
    active: true,
    details: 'Users can access their Gainsight email templates directly from Gmail and provide the ability to log emails to Timeline from their inbox, thereby saving time and ensures that every important conversation is captured',
    description: [
        'Used InboxSDK & Office JS to interact with email service provider events',
        'Dynamically induced IFrames & Angular web components to use cross functional features',
        'Introduced service workers for API calls, sandboxing for template rendering, and webpack upgradations',
        'Dynamic bundling & deployments for both chrome extension & add-in'
    ],
    skills: ['react', 'angular', 'js', 'ts', 'html', 'css', 'office', 'inbox', 'git', 'junkins']
},{
    id: 'project_02',
    iconClass: 'gs-logo',
    label: 'Gainsight Assist - Zoom Plugin',
    company: 'Gainsight Inc',
    startDate: '02 March 2021',
    endDate: 'current',
    details: 'Users can access their Gainsight. Customer 360 layout sections Timeline, People, Scorecard, Summary, and Attribute features directly within Zoom surfacing critical insights and enabling note-taking in real-time while on customer calls',
    description: [
        'Build using Angular 8 with interactive and responsive designs with supports And-D UI components',
        'Build a provision to support dynamic and autonomous web components so other features can be onboarded quickly'
    ],
    active: false,
    images: [],
    skills: ['angular', 'ts', 'html', 'css', 'zoom', 'git', 'junkins']
},{
    id: 'project_03',
    iconClass: 'gs-logo',
    label: 'Ng Web Component Registry',
    company: 'Gainsight Inc',
    startDate: '02 March 2021',
    details: 'Migrated all angular modules to web components to reduce page load time and helps individual features to be maintained as autonomous bundles',
    description: [
        'Developed component registry services so all teams can onboard their modules as web component by using angular elements',
        'Migrated common modules like Header, Global Search, Chatbot etc., to ng web components'
    ],
    skills: ['angular', 'ts', 'html', 'css', 'git', 'junkins'],
    endDate: 'current',
    active: false,
    images: []
},{
    id: 'project_04',
    iconClass: 'gs-logo',
    label: 'GS Chat bot',
    company: 'Gainsight Inc',
    startDate: '02 March 2020',
    details: 'CSMs can get their client information from chat bot with simple commang lines',
    description: [
        'Developed and maintained web component chat bot that is loaded commonly for all Gainsight Pages',
        'Web component and backend connectivity is established with sockets',
        'Has flexibility to load the chat bot component in Gainsight\'s connected domain'
    ],
    skills: ['angular', 'js', 'jquery', 'ts', 'node', 'html', 'css', 'git', 'junkins'],
    endDate: 'current',
    active: false,
    images: []
}]