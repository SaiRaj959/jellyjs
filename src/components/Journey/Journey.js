import React from 'react';
import './Journey.scss';
import {CalendarFilled} from '@ant-design/icons';
import {skills} from '../../data/skills';

export class Journey extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="journey">
                {journey.reverse().map((jou, i)=>{
                    return(
                        <div className="journey-step" key={i}>
                            <div className="journey-step-title">
                                <span>{jou.startDate}</span>
                            </div>
                            <div className={(jou.startDate==='current' ? 'active' :'')+" journey-candle"}>
                                <div className="journey-candle-head">
                                </div>
                                <div className="journey-candle-line">
                                </div>
                            </div>
                            <div className="journey-content">
                                <div className="journey-content-header">
                                    <div className="journey-content-header-title">{jou.label}</div>
                                    <div className="journey-content-header-company">
                                        <span className={(jou.iconClass || '')}></span>
                                        <span className="company">{jou.company}</span>
                                    </div>
                                </div>
                                <div className="journey-content-body">
                                    <div className='journey-content-body-details'>
                                        {jou.description.map((desc, i)=>{
                                            return (
                                                <div className="point" key={i}>
                                                    {desc}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="journey-content-body-skills">
                                        {jou.skills.map((skill, i)=>{
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
                    )
                })}
            </div>
        )
    }
}

const journey = [{
    id: 'exp_1',
    iconClass: 'gs-logo',
    label: 'Senior Software Engineer - UI',
    company: 'Gainsight Inc',
    active: true,
    startDate: 'Current',
    endDate: 'Current',
    description: [
        'Developed and maintained multiple dynamic, interactive, responsive, cross team dependent web applications',
        'Managing and mentoring 3 associates and responsible for code validation and GIT mergers',
        'Planning sprints, tasks, efforts & estimates for UI team',
        'Cross team collaborations for feature development / maintenance',
        'Collaborating with clients for gathering feature requirements, and customer escalations',
    ],
    skills: ['angular', 'react', 'js', 'ts', 'node', 'express', 'git', 'junkins']
},{
    id: 'exp_2',
    iconClass: 'gs-logo',
    label: 'Software Engineer',
    company: 'Gainsight Inc',
    active: false,
    startDate: '02 March 2020',
    endDate: '02 March 2022',
    description: [
        'Developed and enhanced autonomous web applications and web components',
        'Worked at an independent level to build web pages from scratch',
        'Collaborated with clients to gather feature requirements',
        'Worked with architects to improvise UI modules'
    ],
    skills: ['angular', 'react', 'js', 'jquery', 'html', 'css']
},{
    id: 'exp_3',
    iconClass: 'tcs-logo',
    label: 'Front End Engineer',
    company: 'Tata Consultancy Services',
    active: false,
    startDate: '22 June 2017',
    endDate: '02 March 2020',
    description: [
        'Maintained and enhanced web pages with advanced CSS stylings',
        'Developed object oriented JS modules that renders based on admin configurations',
        'Developed interactive and responsive JS components',
        'Migrated vanilla JS & JQuery apps code to object oriented components',
        'Developed Angular apps from scratch',
        'Enhanced page styles with advanced css and added animated look & feel',
    ],
    skills: ['js', 'jquery', 'angular', 'css', 'html', 'bootstrap']
}]