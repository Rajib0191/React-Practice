import React from 'react';
import '../components/App.css';
import Contact from './Contact';
import Skills from './Skills';


const BioData = (props) => {
    // console.log(props);
    return (
        <div className='bio__data'>
            <div className='contact'>
                <h1 className='bio__heading'>Contact</h1>
                <Contact props={props} /> //One Component
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <Skills props={props} /> // Two Component
            </div>
        </div >
    );
}

export default BioData;