import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LargeBanner from './SectionComp/LargeBanner';
import Navbar from './SectionComp/NavbarComp';
import OurCompany from './SectionComp/OurCompanyComp';
import OurProduct from './SectionComp/OurProduct';
import NewTechComp from './SectionComp/NewTechComp';
import Testimonial from './SectionComp/TestimonialComp';
import FooterComp from './SectionComp/FooterComp';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <LargeBanner />
  </React.StrictMode>,
  document.getElementById('section1')
);
ReactDOM.render(
  <React.StrictMode>
    <OurCompany />
  </React.StrictMode>,
  document.getElementById('section2')
);
ReactDOM.render(
  <React.StrictMode>
    <OurProduct />
  </React.StrictMode>,
  document.getElementById('section3')
);
ReactDOM.render(
  <React.StrictMode>
    <NewTechComp />
  </React.StrictMode>,
  document.getElementById('section4')
);
ReactDOM.render(
  <React.StrictMode>
    <Testimonial />
  </React.StrictMode>,
  document.getElementById('section5')
);
ReactDOM.render(
  <React.StrictMode>
    <FooterComp />
  </React.StrictMode>,
  document.getElementById('section6')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
