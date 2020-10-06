import React, { Component } from 'react';
import '../css/master.css';
import NewTechBoxComp from './NewTechBoxComp';

class NewTechComp extends Component {
    render() {
        return (
            <div className="new-technologies-wrap">
                <h3 className="new-technologies-title">NEW TECHNOLOGIES</h3>
                <p className="new-technologies-subtitle">Lorem ipsum dolor</p>
                <NewTechBoxComp
                    imageboxtechurl="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    techboxtitle="Nulla facilisi"
                    techboxsubtitle="Lorem ipsum dolor"
                    techboxdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
                />
                <NewTechBoxComp
                    imageboxtechurl="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
                    techboxtitle="Aenean nec eros" 
                    techboxsubtitle="Lorem ipsum dolor"
                    techboxdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
                />
                <NewTechBoxComp
                    imageboxtechurl="https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    techboxtitle="Scelerisque vitae pede"
                    techboxsubtitle="Lorem ipsum dolor"
                    techboxdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
                />
                <NewTechBoxComp
                    imageboxtechurl="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    techboxtitle="Consectetuer"
                    techboxsubtitle="Lorem ipsum dolor"
                    techboxdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
                />
            </div>
        )
    }
}

export default NewTechComp;
