import React, { Component } from 'react';
import '../css/master.css';

const OurCompanyBox = (props) => {
    return (
        <div className="box">
            <div className="box-title">
                <h4>{props.boxtitle}</h4>
            </div>
            <div className="box-content">
                <p>{props.boxcontent}</p>
                <figure>
                    <img src={props.figure1} alt="" srcset=""/>
                </figure>
                <figure>
                    <img src={props.figure2} alt="" srcset=""/>
                </figure>
                <figure>
                    <img src={props.figure3} alt="" srcset=""/>
                </figure>
            </div>
            <button className="btn-box" style={{display: props.btndisplay}}>{props.btnname}</button>
        </div>
    )
}

OurCompanyBox.defaultProps = {
    boxtitle: 'Add Title',
    btndisplay: 'none',
    btnname: 'Button'
}

export default OurCompanyBox;
