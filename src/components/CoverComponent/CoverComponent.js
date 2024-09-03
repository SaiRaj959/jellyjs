import React from 'react';
import {PhoneOutlined, MailOutlined, WhatsAppOutlined, LinkedinOutlined, TwitterOutlined, CopyOutlined, CheckCircleFilled} from '@ant-design/icons';
import './CoverComponent.scss';


export default class CoverComponent extends React.Component{
    state = {
    }
    actionEl;
    constructor(props){
        super(props);
        // this.setState(props);
    }

    copyThat = (evt, text)=>{
        navigator.clipboard.writeText(text);
        if(this.actionEl){
            this.actionEl.classList.remove('clipped');
        }
        if(!evt.target.classList.contains('action')){
            this.actionEl = evt.target.parentElement;
        }else{
            this.actionEl = evt.target;
        }
        if(this.actionEl){
            this.actionEl.classList.add('clipped');
            setTimeout(() => {
                if(this.actionEl){
                    this.actionEl.classList.remove('clipped');
                    this.actionEl = null;
                }
            }, 1200);
        }
    }
    openUrl = (evt, url)=>{
        window.open(url, '_blank')
    }

    render(){
        return (
            <div className="cover">
                <div className="cover-wrapper">
                    <div className="cover-actions">
                        <div className="cover-actions-wrapper">
                            <div className="cover-actions-list">
                                {/* <div className="action" onClick={(evt)=>{this.copyThat(evt, '+919030565181')}}>
                                    <CheckCircleFilled className="clip" style={{ fontSize: '16px'}}/>
                                    <CopyOutlined className="unclip" style={{ fontSize: '16px'}} />
                                    <span className="action-item">+91 9030565181</span>
                                </div> */}
                                <div className="action" onClick={(evt)=>{this.copyThat(evt, 'sairaj959@gmail.com')}}>
                                    <CheckCircleFilled className="clip" style={{ fontSize: '16px'}}/>
                                    <CopyOutlined className="unclip" style={{ fontSize: '16px'}} />
                                    <span className="action-item">sairaj959@gmail.com</span>
                                </div>
                                {/* <div className="action" onClick={(evt)=>{this.copyThat(evt, '9030565181')}}>
                                    <CheckCircleFilled className="clip" style={{ fontSize: '16px'}}/>
                                    <CopyOutlined className="unclip" style={{ fontSize: '16px'}} />
                                    <span className="action-item">9030565181</span>
                                </div> */}
                                <div className="action" onClick={(evt)=>{this.openUrl(evt, "https://www.linkedin.com/in/sairaj-kujala/")}}>sairaj-kujala</div>
                                {/* <div className="action" onClick={(evt)=>{this.openUrl(evt, "../assets/pdf_cover.pdf")}}>Cover</div>
                                <div className="action" onClick={(evt)=>{this.openUrl(evt, "../assets/pdf_resume.pdf")}}>Resume</div> */}
                            </div>
                            {/* <PhoneOutlined className="p_icon bulge" style={{ fontSize: '24px'}}/> */}
                            <MailOutlined className="p_icon bulge" style={{ fontSize: '24px'}}/>
                            {/* <WhatsAppOutlined className="p_icon bulge" style={{ fontSize: '24px'}}/> */}
                            <LinkedinOutlined className="p_icon bulge" style={{ fontSize: '24px'}}/>
                            {/* <TwitterOutlined className="p_icon bulge" style={{ fontSize: '24px'}}/> */}

                            {/* <span className="p_icon p_phone bulge"></span> */}
                            {/* <span className="p_icon p_email bulge"></span> */}
                            {/* <span className="p_icon p_whatsapp bulge"></span>
                            <span className="p_icon p_linkedin bulge"></span>
                            <span className="p_icon p_twitter bulge"></span> */}
                            {/* <span className="p_icon p_resume bulge"></span>
                            <span className="p_icon p_cover bulge"></span> */}
                        </div>
                    </div>
                    <div className="cover-content">
                        <div className="name">SaiRaj Kujala</div>
                        <div className="designation">Senior Software Engineer</div>
                        <div className="company"><span className="gs-logo"></span>Gainsight Ltd</div>
                    </div>
                    <div className="cover-image">
                        <div className="cover-dp">
                            <span className="dp"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}