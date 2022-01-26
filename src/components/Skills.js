import React from 'react';

const Skills = (props) => {
    // console.log(props)
    return (
        <div className='skills'>
            <ul>
                {props.props.skills.map((skill) => {
                    return (
                        <li key={skill.toString()}>{skill}</li>
                    )
                })}
            </ul>
        </div>
    );
}
export default Skills;