import React from 'react';

export default function TasksNumber ({ today, fontSize}){

    const style = {
        transition: '1s',
        fontSize: `${fontSize}vw`,
        lineHeight: 1
    }

    return(
    <>
        <p 
            className="overview-text" 
            style={{transition: '1s',fontSize: `${fontSize/3}vw`}}
        >
            You've got
        </p>
            
        <p style={style} className="overview-num">{today}</p>
        
        {today === 1 ?
        
            <p 
                className="overview-text"
                style={{transition: '1s',fontSize: `${fontSize/3}vw`}}
            >
                Task today
            </p>
        :
            <p 
                className="overview-text" 
                style={{transition: '1s',fontSize: `${fontSize/3}vw`}}
            >
                Tasks today
            </p>
        }

    </>
    )

}