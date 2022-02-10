import { useState, useEffect } from 'react';


export default function TasksNumber ({ todo, fontSize }){
    
    const style = {
        transition: '1s',
        fontSize: `${fontSize}vw`,
        lineHeight: 1
    }


    return(
    <>
        <p 
        
            className="overview-text" style={{transition: '1s',fontSize: `${fontSize/3}vw`}}
        >
            You've got
        </p>
            
            <p style={style} className="overview-num">{todo}</p>

        {todo === 1 ?
        
            <p 
                className="overview-text" 
                style={{transition: '1s',fontSize: `${fontSize/3}vw`}}
            >
                Task to do
            </p>
        :
            <p 
                className="overview-text" 
                style={{transition: '1s',fontSize: `${fontSize/3}vw`}}
            >
                Tasks to do
            </p>
        }

    </>
    )

}