import React from 'react';
import { Badge, Card } from 'antd';
import './skills.scss';
import {skills} from '../../data/skills';
const { Meta } = Card;
export default class Skills extends React.Component{
    constructor(props){
        super(props);
    }

    getCardWidthStyle(level = '0'){
        return {width: parseInt(level)*10 + '%'};
    }

    render(){
        return (
            <div className="skills-container">
                {Object.values(skills).map((skill, i)=>{
                    return (
                        <div className="skill-card" key={i}>
                            <Badge.Ribbon text={skill.experience} color="#e44f26">
                                <Card hoverable style={{ width: 240, backgroundColor: '#022d55', border: 'unset' }} cover={<span className={skill.icon + " skill-card-icon"}></span>}>
                                    <Meta 
                                        title={<div className="skill-card-label"><span style={{color: "#1c9bf6"}}>{skill.label}</span></div>}
                                        description={<div className="skill-card-level" style={{color: "#1c9bf6"}}><span>Skill Level</span><div className="skill-card-progress"><span style={this.getCardWidthStyle(skill.level)}></span></div></div>}
                                    ></Meta>
                                </Card>
                            </Badge.Ribbon>
                        </div>
                    )
                })}
            </div>
        )
    }

}