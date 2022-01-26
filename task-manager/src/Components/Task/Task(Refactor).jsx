// import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Task.css'

//import dnd
import { Draggable } from 'react-beautiful-dnd';

export default function Task({ task, index }) {
    const details = [];
    const time = task.time
    const location = task.location
    const date = task.date
    if (date) {
        details.push(date)
    }
    if (time) {
        details.push(time)
    }
    if (location) {
        details.push(location)
    }

    const [done, setDone] = useState(task.done);
    const handleDone = () => {
        setDone(!done)
        task.done = !task.done
        console.log(done)
    }

    const [expand, setExpand] = useState(false);
    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <Draggable
            draggableId={task.id}
            index={index}
        >
            {(provided,snapshot) => (
            /* <!-- Start of item row --> */
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                // isDraaging={snapshot.isDraaging}
                className="row task-card"
            >
                {/* <!-- icon column --> */}
                <div className="col-1">
                    {/* <!-- icon --> */}
                    <div className="mx-auto w-100 h-100">
                      <i onClick={handleDone} className={task.done ? 'fas fa-check buttonFalse' : 'fas fa-check buttonTrue'}></i>
                    </div>
                    {/* <i className="fas fa-check task-icon"></i> */}
                </div>

                {/* Start of Task column */}
                <div className="col-10 task-description" id="testing">
                    {/* <!-- Start of Task row --> */}
                    <div className="row">
                        <p name="name" className={'task-title' + (task.done ? ' complete ' : '')}>
                        {/* Andison:<input name="name" type="text" class={'taskTitle' +(this.state.complete ? ' complete ' : '')} value={this.state.name} onChange={this.changeState} /> */}
                            {task.title}
                        </p>
                    </div>

                    {/* Description row */}
                    <div className="row">
                        <p className="text-secondary task-details">
                            {details.join(' ‧ ')}
                        </p>
                        {/* click to show input of notes */}
                        <p onClick={handleExpand}>...</p>
                        <p className={expand ? 'noteShowTrue' : 'noteShowFalse'}>{task.note}</p>
                    </div>
                    {/* <!-- End of Task column --> */}
                </div>
                {/* <!-- End of item row --> */}
            </div>

            )}
        </Draggable>
    )
}