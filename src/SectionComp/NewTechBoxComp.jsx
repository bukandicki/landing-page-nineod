import React, { Component } from 'react';
import '../css/master.css';

const NewTechBoxComp = (props) => {
    return (
        <div className="box-tech">
            <div className="image-box-container">
                <img src={props.imageboxtechurl} alt="" />
            </div>
            <div className="desc-container">
                <span className="title-box-tech">{props.techboxtitle}</span>
                <span className="subtitle-box-tech">{props.techboxsubtitle}</span>
                <p className="desc-box-tech">{props.techboxdesc}</p>

            </div>
            
        </div>
    )
}

export default NewTechBoxComp;
