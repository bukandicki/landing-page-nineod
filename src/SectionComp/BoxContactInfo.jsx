import React from 'react';
import '../css/master.css';

const BoxContact = (props) => {
    return (
        <div className="box-contact" style={{backgroundColor: props.bgboxcontact}}>
            <div className="icon-container">
                <img src={props.imageicon} alt="" srcset=""/>
            </div>
            <div className="box-contact-content">
                <span>{props.contactcontent}</span>
            </div>
        </div>
    )
}

export default BoxContact;
