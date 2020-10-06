import React, { Component } from 'react';
import '../css/master.css';

class OurProduct extends Component {
    render() {
        return (
            <div className="our-product-container">
                <div className="box-wrapper-product">
                    <div className="box-product">
                        <div className="our-product-title">
                            <h4>Our Products</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum nemo consequuntur saepe deleniti corporis <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum nemo consequuntur saepe deleniti corporis </p>
                            <button className="btn-our-product">SEE ALL PRODUCTS</button>
                        </div>
                    </div>
                    <div className="box-product">
                        <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" srcset=""/>
                        <span className="name-product">Lorem Ipsum</span>
                    </div>
                    <div className="box-product">
                        <img src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" alt="" srcset=""/>
                        <span className="name-product">Dolor Sit Amet</span>
                    </div>
                    <div className="box-product">
                        <img src="https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" srcset=""/>
                        <span className="name-product">Lorem Ipsum</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurProduct;
