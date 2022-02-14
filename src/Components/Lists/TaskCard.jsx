import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';

function TaskCard({ task, index, listTitle }) {
    const details = [];

    if (task.date) {
        details.push(task.date)
    }
    if (task.time) {
        details.push(task.time)
    }
    if (task.location) {
        details.push(task.location)
    }

    const Card = styled.div`
        // borderRadius: 2!important,
        // marginBottom: 8!important 
    `


    return (

        <Draggable
            draggableId={task.id.toString()}
            index={index}
        >
            {(provided, snapshot) => (


                <Card    
                    className=" task-item accordion-item px-2" 
                    // style={{
                    //     borderRadius: "2!important",
                    //     marginBottom: 8 
                    // }}
                    {...provided.draggableProps}
                    
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {/* start of upper row */}
                    <div className="row">

                        {/* Done icon */}
                        <div className="col-1">
                            <i className="fas fa-check d-block mb-auto mt-1" style={{fontSize: 16}}></i>
                        </div>

                        {/* Event title */}
                        <div className="col-9">
                            <p style={{fontSize: 16}}
                                type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                aria-expanded="false" aria-controls="collapseTwo"
                                data-testid={listTitle}
                            >
                                {task.title}
                            </p>
                        </div>

                        {/* Edit icon */}
                        <button className="col-1 my-auto">
                            <svg className="d-block ms-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{lineHeight: 0, fontSize: 16}}>
                                <path d="M15.0534 3.69778L12.4445 1.07556C12.2721 0.904029 12.0388 0.807739 11.7956 0.807739C11.5524 0.807739 11.3191 0.904029 11.1467 1.07556L1.8978 10.3111L1.05336 13.9556C1.02423 14.0888 1.02523 14.2268 1.05628 14.3596C1.08734 14.4924 1.14766 14.6166 1.23285 14.7231C1.31804 14.8296 1.42595 14.9157 1.54868 14.9751C1.67141 15.0346 1.80588 15.0658 1.94225 15.0667C2.00579 15.0731 2.06982 15.0731 2.13336 15.0667L5.8178 14.2222L15.0534 4.99556C15.2249 4.82316 15.3212 4.58986 15.3212 4.34667C15.3212 4.10347 15.2249 3.87018 15.0534 3.69778V3.69778ZM5.37336 13.4222L1.92003 14.1467L2.70669 10.76L9.62669 3.86667L12.2934 6.53333L5.37336 13.4222ZM12.8889 5.88889L10.2222 3.22222L11.7689 1.68444L14.3911 4.35111L12.8889 5.88889Z" fill="black"/>
                            </svg>                     
                        </button>

                        {/* Drop down button */}
                        <button className="col-1 my-auto">
                            <svg className="d-block ms-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{lineHeight: 0, fontSize: 16}}>
                                <path d="M5.125 7.5H10.875C10.9438 7.5 11 7.55625 11 7.625V8.375C11 8.44375 10.9438 8.5 10.875 8.5H5.125C5.05625 8.5 5 8.44375 5 8.375V7.625C5 7.55625 5.05625 7.5 5.125 7.5Z" fill="black"/>
                                <path d="M8 1C11.8656 1 15 4.13438 15 8C15 11.8656 11.8656 15 8 15C4.13438 15 1 11.8656 1 8C1 4.13438 4.13438 1 8 1ZM8 13.8125C11.2094 13.8125 13.8125 11.2094 13.8125 8C13.8125 4.79063 11.2094 2.1875 8 2.1875C4.79063 2.1875 2.1875 4.79063 2.1875 8C2.1875 11.2094 4.79063 13.8125 8 13.8125Z" fill="black"/>
                            </svg>

                        </button>
                        
                    </div>
                    {/* end of upper row */}

                    {/* start of lower row */}
                    <div className="row" style={{alignItems: "center"}}>

                        {/* pirority icon */}
                        <div className="col-1">
                            {/* <div className="me-auto ms-1"
                                style={{
                                    borderRadius: "50%",
                                    height: 8,
                                    width: 8,
                                    background: "#C05757"
                                }}
                            >
                            </div> */}
                        </div>

                        {/* date & time */}
                        <div className="col">
                            <p className="text-secondary" style={{fontSize: 12}}>
                                {details.join(' ‧ ')}
                            </p>
                        </div>
                    </div>
                    {/* end of lower row */}

                    {/* drop down notes */}
                    <div id="collapseTwo" className="accordion-collapse collapse"
                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p style={{fontSize: 12}}>{task.notes}</p>
                        </div>
                    </div>
                </Card>


            )}

        </Draggable>

    );
}

export default TaskCard;