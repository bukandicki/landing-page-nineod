import React, { Component, Fragment } from 'react';
import '../css/master.css';
import OurCompanyBox from './OurCompanyBox';

class OurCompany extends Component {
    render() {
        return (
            <div className="OurCompanySection">
                <div className="container">
                    <h1 className="title-our-company">Our Company At Glance</h1>
                    <p className="sub-title-our-company">a new generation of farming</p>
                    <div className="box-wrapper">
                        <OurCompanyBox 
                            boxtitle='We Provide unique value diven products' 
                            boxcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            btnname='More About Us'
                            btndisplay='block'
                        />
                        <OurCompanyBox 
                            boxtitle='Only highly qualified and motivated staff'
                            avatardisplay='inline-flex'
                            figure1='https://anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png' 
                            figure2='https://image.flaticon.com/icons/png/512/146/146035.png' 
                            figure3='https://www.shareicon.net/data/512x512/2016/09/15/829446_user_512x512.png' 
                            btnname='' 
                            btndisplay='none'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default OurCompany;
