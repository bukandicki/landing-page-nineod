import React, { Component } from 'react';
import '../css/master.css';

class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial-wrapper">
                <div className="testimonial">
                    <div className="testimonial-avatar">
                        <img src="https://anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png" alt="" srcset=""/>
                    </div>
                    <div className="testimonial-quote">
                        <span>"</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam soluta repellendus iste asperiores et similique optio nisi sequi sit sed debitis beatae deleniti perspiciatis nam quia incidunt, eum ea tempore! sit amet consectetur adipisicing elit. Ipsam soluta repellendus iste asperiores</p>
                    </div>
                    <div className="testimonial-name">Dicki Maulana</div>
                </div>
            </div>
        )
    }
}

export default Testimonial;
