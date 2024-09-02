import React from 'react';
import Container from '../components/container/container';
import SCards from '../components/scards/scards';
import Projects from '../components/Projects/Projects';
import './Portfolio.scss';
import CoverComponent from '../components/CoverComponent/CoverComponent';
import Scroller from '../components/Scroller/Scroller';
import Skills from '../components/skills/skills';
import { Journey } from '../components/Journey/Journey';

export default class Portfolio extends React.Component{
    state = {
        animate: false,
        exp_active: experience[0].id,
        selected_exp: experience[0]
    }
    componentDidMount(){
        this.setAnimation();
    }

    setAnimation(){
        setTimeout(()=>{
            this.setState({animate: true});
        }, 1000);
    }

    onExpItemClicked(e){
        console.log('onext selected->',e);
        this.setState({...this.state, selected_exp: e, exp_active: e.id});
    }

    render(){
        
        return (
            <div className="portfolio">
                <Scroller>
                    <Container props={{class:"jelly-portfolio"}}>
                        <div className="portfolio-container">

                            <CoverComponent props={{animate: this.state.animate}}/>
                            <div className="portfolio-description">
                                <div className="portfolio-description-wrapper">
                                    <div className="portfolio-content">
                                        <span>
                                        Front-end developer with 7 years of experience. From pixel-perfect designs to interactive user interfaces, I specialize in crafting seamless digital experiences. Let's explore my portfolio and turn your ideas into extraordinary online realities!
                                        </span>
                                    </div>
                                    {/* <div className="portfolio-more">
                                        <div className="portfolio-more-action"><span>My Experience</span></div>
                                        <div className="portfolio-more-action"><span>My Projects</span></div>
                                        <div className="portfolio-more-action"><span>About me</span></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container props={{class:"jelly-skills", title: "My Skills"}}>
                        <Skills />
                    </Container>
                    <Container props={{class:"jelly-projects", title:"My Projects"}}>
                        <Projects />
                    </Container>
                    <Container props={{class:"jelly-experience", title:"My Experience", description: experience_desc}}>
                        <Journey/>
                    </Container>
                </Scroller>
            </div>
        )
    }
}
const projects_desc = "Front-end developer with 7 years of experience. From pixel-perfect designs to interactive user interfaces, I specialize in crafting seamless digital experiences. Let's explore my portfolio and turn your ideas into extraordinary online realities!";
const experience_desc = `Embark on a journey through my career as a front-end developer, where each experience has shaped my expertise and fueled my passion for creating seamless digital experiences. Join me as I traverse through the diverse landscapes of web development, sharing insights gained from my tenure in multiple companies and projects.`;

const experience = [{
    id: 'exp_1',
    iconClass: 'gs-logo',
    label: 'Senior Software Engineer - UI',
    company: 'Gainsight Inc',
    active: true,
    startDate: '02 March 2022',
    endDate: 'Current',
    description: [
        'Developed and maintained Gainsight’s external applications that features on top of email providers (Gmail & Outlook plugins) & Zoom add on',
        'Leading a team of 3 associate developers by taking care of Jira tasks, GIT merges, code reviews and mentoring associates',
        'Maintaining and developing web server',
        'Cross team collaborations for developing interdependent features',
        'Debugging high priority issues in client systems'
    ],
    skills: ['Angular', 'React', 'JS', 'TS', 'Node', 'Express', 'GIT', 'Junkins']
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
        'CWorked with architects to improvise UI modules'
    ],
    skills: ['Angular', 'React', 'JS', 'JQuery', 'HTML', 'CSS']
},{
    id: 'exp_3',
    iconClass: 'tcs-logo',
    label: 'Front End Engineer',
    company: 'Tata Consultancy Services',
    active: false,
    startDate: '22 June 2017',
    endDate: '02 March 2020',
    description: [
        'Maintained and enhanced web pages with advanced styling',
        'Developed object oriented JS modules that loads based on saved configurations',
        'Developed interactive and responsive JS components',
        'Migrated vanilla JS & JQuery apps code to object oriented components',
        'Enhanced page styles with advanced css and added animated look & feel',
    ],
    skills: ['JS', 'JQuery', 'CSS', 'HTML', 'bootstrap']
}]