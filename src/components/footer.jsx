import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var FontAwesome = require('react-fontawesome');

class footer extends Component {
    render() {
        return (

<section className='hero is-primary is-bold'>
    <div className='hero-head'>
        <nav className='navbar is-bold'>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <FontAwesome className="fa-mail-forward fas fa-2x"/>
                    <Link id='underline' to='/about'>About me</Link>
                </div>

                <div className= 'navbar-item'>
                <FontAwesome className="fa-mail-forward fas fa-2x"/>
                <Link id='underline' to='/projects'>My Projects</Link>
                </div>

            </div>  
        </nav>
    </div>
</section>
        );
    }
}

export default footer;