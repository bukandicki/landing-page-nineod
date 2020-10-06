import React, { Component } from 'react';
import '../css/master.css';
import BoxContact from './BoxContactInfo';

class FooterComp extends Component {
    render() {
        return (
            <footer>
                <div className="footer-wrapper">
                    <div className="footer-body">
                        <div className="footer-form">
                            <div className="footer-form-title">
                                <h3>CONTACT INFO</h3>
                                <p>Lorem ipsum dolor</p>
                            </div>
                            <form action="!#">
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="E-mail"/>
                                <textarea name="" placeholder="Message"></textarea>
                                <button>SEND MESSAGE</button>
                            </form>
                        </div>
                        <div className="footer-contact-inf">
                            <div className="footer-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsum dolor.</div>
                            <div className="wrap-box-contact-info">
                                <BoxContact bgboxcontact="#7eae4b" imageicon="https://www.flaticon.com/svg/static/icons/svg/845/845022.svg" contactcontent="Jl. jatihandap bandunng 40283" />
                                <BoxContact bgboxcontact="#389cb4" imageicon="https://www.flaticon.com/svg/static/icons/svg/2947/2947981.svg" contactcontent="089634712231" />
                                <BoxContact bgboxcontact="#5c5c5c" imageicon="https://www.flaticon.com/svg/static/icons/svg/561/561127.svg" contactcontent="nineod@gmail.com" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-body-bottom">
                        <span>Copyright &copy; 2020 <a>Privacy Policy</a></span>
                        <div className="social-media-link">
                            <ul>
                                <li>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111392.svg" alt="" srcset=""/>
                                </li>
                                <li>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/59/59490.svg" alt="" srcset=""/>
                                </li>
                                <li>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/733/733635.svg" alt="" srcset=""/>
                                </li>
                                <li>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/633/633924.svg" alt="" srcset=""/>
                                </li>
                            </ul>
                        </div>
                        {/* <img src="https://www.flaticon.com/svg/static/icons/svg/845/845022.svg" alt="" srcset=""/>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2947/2947981.svg" alt="" srcset=""/>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/561/561127.svg" alt="" srcset=""/>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111392.svg" alt="" srcset=""/>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/59/59490.svg" alt="" srcset=""/>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/733/733635.svg" alt="" srcset=""/>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/633/633924.svg" alt="" srcset=""/> */}
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComp;
