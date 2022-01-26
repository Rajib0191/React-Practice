import React from 'react';

const Contact = (props) => {
    return (
        <div className='bio__details'>
            <h3 className='name'>{props.props.name}</h3>
            <h5 className='gmail'>{props.props.gmail}</h5>
            <h5 className='mobile'>{props.props.mobile}</h5>
        </div>
    )
};
export default Contact;