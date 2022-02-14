import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import $ from 'jquery'
import styled from 'styled-components';


const TaskCard = styled.div`
    border-radius: 5px;
    margin-bottom: 8px;
    background: white;
    padding: 8px 1rem;
    font-size: 30px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
`

function Task({ task, index, handleEditTask, handleToggleDone, handleRemoveTask, isDragDisabled }) {

    const details = [];

    if (task.date) {
        if(task.date.toString() === "2022-02-11") {
            details.push('Today')

        } else {
            details.push(task.date)
        }
    }
    if (task.time) {
        details.push(task.time)
    }
    if (task.location) {
        details.push(task.location)
    }

    const [updateTask, setUpdateTask] = useState(task);
    // inputing form



    const handleChange = ({ target }) => {
        // insert corresponding name and input as porperty [name] & value in the newTask object
        const { name, value } = target;
        setUpdateTask(prev => ({
            ...prev,
            [name]: value,
        })
        );
        console.log(task)
    };

    const handleUnsave = (e) => {
        e.preventDefault();
        setUpdateTask(task)
        setEdit(!edit)
    }

    const [edit, setEdit] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditTask(task.id, updateTask)
        setEdit(!edit)
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleToggleDone(task.id)
    }

    const handleRemove = e => {
        e.preventDefault();
        handleRemoveTask(task.id)
    }


    return (
        <Draggable
            draggableId={task.id.toString()}
            index={index}
            isDragDisabled={isDragDisabled}
        >
            {(provided, snapshot) => (
                <TaskCard
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="accordion-item"
                >
                    {/* start of upper row */}
                    <div className="row">

                        {/* Done icon */}
                        <div className="col-1 m-auto">
                            <i type="button"
                                name="done"
                                onClick={handleClick}
                                // onClick={() => {task.done = !task.done}}
                                className="m-auto d-block fas fa-check p-1"
                                style={{
                                    fontSize: 16,
                                    color: task.done ? '#70bbae' : 'lightGrey',
                                }}
                            >
                            </i>
                        </div>

                        {/* Event title */}
                        <div
                            className="col "
                            style={{ overflow: 'hidden', position: 'relative', minHeight: 33 }}
                            type="button"
                            data-bs-toggle="collapse" data-bs-target={"#all" + task.id}
                            aria-expanded="false" aria-controls="collapseTwo"

                        >

                            {edit ?
                                <input
                                    className='w-100'
                                    style={{ fontSize: 22, lineHeight: 0, background: 'rgb(240, 240, 240)', border: 0, height: 33, padding: 0, position: 'absolute', top: 0 }}
                                    type="text"
                                    placeholder='Title'
                                    name="title"
                                    value={updateTask.title || ""}
                                    maxLength="20"
                                    onChange={handleChange}
                                    data-testid="edit-title"
                                /> 
                                :
                                <p
                                    // onClick={() => setEdit(!edit)}
                                    style={{
                                        fontSize: 22,
                                        textDecoration: task.done ? "line-through" : "none",
                                        color: task.done ? "lightgrey" : "inherit"
                                    }}
                                    
                                    data-testid="task-title"
                                >
                                    {task.title}
                                    {/* Feed the cats */}
                                </p>
                            }
                        </div>



                        {/* edit task button */}
                        {edit ?
                            // savebutton     
                            <button
                                className="col-1  d-flex align-items-center justify-content-center"
                                onClick={handleSubmit}
                                data-testid="save"
                            >
                                {/* <button className="col-1 d-flex align-items-center justify-content-center" > */}
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8067 3.52668L12.4733 0.193344C12.411 0.131557 12.3372 0.0826733 12.2559 0.0494969C12.1747 0.0163206 12.0877 -0.000496119 12 1.11429e-05H1.33333C0.979711 1.11429e-05 0.640572 0.140487 0.390524 0.390535C0.140476 0.640583 0 0.979722 0 1.33334V14.6667C0 15.0203 0.140476 15.3594 0.390524 15.6095C0.640572 15.8595 0.979711 16 1.33333 16H14.6667C15.0203 16 15.3594 15.8595 15.6095 15.6095C15.8595 15.3594 16 15.0203 16 14.6667V4.00001C16.0005 3.91227 15.9837 3.8253 15.9505 3.74407C15.9173 3.66285 15.8684 3.58897 15.8067 3.52668ZM5.33333 1.33334H10.6667V4.00001H5.33333V1.33334ZM10.6667 14.6667H5.33333V9.33334H10.6667V14.6667ZM12 14.6667V9.33334C12 8.97972 11.8595 8.64058 11.6095 8.39053C11.3594 8.14048 11.0203 8.00001 10.6667 8.00001H5.33333C4.97971 8.00001 4.64057 8.14048 4.39052 8.39053C4.14047 8.64058 4 8.97972 4 9.33334V14.6667H1.33333V1.33334H4V4.00001C4 4.35363 4.14047 4.69277 4.39052 4.94282C4.64057 5.19286 4.97971 5.33334 5.33333 5.33334H10.6667C11.0203 5.33334 11.3594 5.19286 11.6095 4.94282C11.8595 4.69277 12 4.35363 12 4.00001V1.60668L14.6667 4.27334V14.6667H12Z" fill="black" />
                                </svg>

                            </button>
                            :
                            //edit button
                            <button
                                className="col-1  d-flex align-items-center justify-content-center"
                                onClick={() => {
                                    setEdit(!edit)
                                    $(`#all${task.id}`).addClass("show");
                                }

                                }
                                data-testid="edit"
                            >
                                {/* <button className="col-1 d-flex align-items-center justify-content-center" > */}
                                <svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.5208 5.77777L19.4444 1.68055C19.1751 1.41254 18.8105 1.26208 18.4305 1.26208C18.0505 1.26208 17.686 1.41254 17.4166 1.68055L2.96526 16.1111L1.64581 21.8055C1.6003 22.0137 1.60186 22.2294 1.65038 22.4369C1.6989 22.6444 1.79316 22.8384 1.92627 23.0048C2.05938 23.1712 2.22798 23.3057 2.41975 23.3986C2.61152 23.4915 2.82162 23.5404 3.0347 23.5417C3.13399 23.5517 3.23403 23.5517 3.33331 23.5417L9.09026 22.2222L23.5208 7.80555C23.7888 7.53618 23.9393 7.17165 23.9393 6.79166C23.9393 6.41167 23.7888 6.04714 23.5208 5.77777V5.77777ZM8.39581 20.9722L2.99998 22.1042L4.22915 16.8125L15.0416 6.04166L19.2083 10.2083L8.39581 20.9722ZM20.1389 9.20138L15.9722 5.03471L18.3889 2.63194L22.4861 6.7986L20.1389 9.20138Z" fill="black" />
                                </svg>
                            </button>
                        }

                        {/* delete task button */}
                        {edit ?
                            <button
                                className="col-1  d-flex align-items-center justify-content-center"
                                onClick={handleUnsave}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.854 2.14598C13.9005 2.19242 13.9375 2.2476 13.9627 2.30834C13.9879 2.36909 14.0009 2.43421 14.0009 2.49998C14.0009 2.56575 13.9879 2.63087 13.9627 2.69161C13.9375 2.75236 13.9005 2.80753 13.854 2.85398L2.85396 13.854C2.76007 13.9479 2.63274 14.0006 2.49996 14.0006C2.36718 14.0006 2.23985 13.9479 2.14596 13.854C2.05207 13.7601 1.99933 13.6328 1.99933 13.5C1.99933 13.3672 2.05207 13.2399 2.14596 13.146L13.146 2.14598C13.1924 2.09941 13.2476 2.06247 13.3083 2.03727C13.3691 2.01206 13.4342 1.99908 13.5 1.99908C13.5657 1.99908 13.6308 2.01206 13.6916 2.03727C13.7523 2.06247 13.8075 2.09941 13.854 2.14598V2.14598Z" fill="black" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.14598 2.14598C2.09941 2.19242 2.06247 2.2476 2.03727 2.30834C2.01206 2.36909 1.99908 2.43421 1.99908 2.49998C1.99908 2.56575 2.01206 2.63087 2.03727 2.69161C2.06247 2.75236 2.09941 2.80753 2.14598 2.85398L13.146 13.854C13.2399 13.9479 13.3672 14.0006 13.5 14.0006C13.6328 14.0006 13.7601 13.9479 13.854 13.854C13.9479 13.7601 14.0006 13.6328 14.0006 13.5C14.0006 13.3672 13.9479 13.2399 13.854 13.146L2.85398 2.14598C2.80753 2.09941 2.75236 2.06247 2.69161 2.03727C2.63087 2.01206 2.56575 1.99908 2.49998 1.99908C2.43421 1.99908 2.36909 2.01206 2.30834 2.03727C2.2476 2.06247 2.19242 2.09941 2.14598 2.14598V2.14598Z" fill="black" />
                                </svg>
                            </button>
                            :
                            <button
                                onClick={handleRemove}
                                className="col-1  d-flex align-items-center justify-content-center"
                                data-testid="delete-task"
                            >
                                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.04688 10.3125H14.9531C15.0477 10.3125 15.125 10.3898 15.125 10.4844V11.5156C15.125 11.6102 15.0477 11.6875 14.9531 11.6875H7.04688C6.95234 11.6875 6.875 11.6102 6.875 11.5156V10.4844C6.875 10.3898 6.95234 10.3125 7.04688 10.3125Z" fill="black" />
                                    <path d="M11 1.375C16.3152 1.375 20.625 5.68477 20.625 11C20.625 16.3152 16.3152 20.625 11 20.625C5.68477 20.625 1.375 16.3152 1.375 11C1.375 5.68477 5.68477 1.375 11 1.375ZM11 18.9922C15.4129 18.9922 18.9922 15.4129 18.9922 11C18.9922 6.58711 15.4129 3.00781 11 3.00781C6.58711 3.00781 3.00781 6.58711 3.00781 11C3.00781 15.4129 6.58711 18.9922 11 18.9922Z" fill="black" />
                                </svg>
                            </button>
                        }
                    </div>
                    {/* end of upper row */}

                    {/* start of lower row */}
                    <div className="row" style={{ alignItems: "center" }}>

                        {/* pirority icon */}
                        <div className="col-1">
                            {/* <div className="me-auto ms-2"
                    style={{borderRadius: "50%", height: 10, width: 10, background: "#C05757"}}>
                </div> */}
                        </div>

                        {/* date & time */}
                        {edit ?
                            <div className="col d-flex w-100"
                                style={{
                                    minHeight: edit && 27,
                                    // position: 'relative'
                                }}
                            >
                                <div className='d-inline' style={{ position: 'relative', width: 96 }}>

                                    <input
                                        className='w-100'
                                        style={{ fontSize: 18, lineHeight: 0, background: 'rgb(240, 240, 240)', border: 0, height: 27, padding: 0, position: 'absolute', top: 0 }}
                                        type="date"
                                        placeholder='date'
                                        name="date"
                                        value={updateTask.date || ""}

                                        onChange={handleChange}
                                    />
                                </div>
                                <p style={{ fontSize: 18 }}>&nbsp;‧&nbsp;</p>

                                <div className='d-inline' style={{ position: 'relative', width: 47.5 }}>

                                    <input
                                        className='w-100'
                                        style={{ fontSize: 18, lineHeight: 0, background: 'rgb(240, 240, 240)', border: 0, height: 27, padding: 0, position: 'absolute', top: 0 }}
                                        type="time"
                                        placeholder='time'
                                        name="time"
                                        value={updateTask.time || ""}

                                        onChange={handleChange}
                                    />
                                </div>
                                <p style={{ fontSize: 18 }}>&nbsp;‧&nbsp;</p>

                                <div className='w-50 d-inline' style={{ position: 'relative' }}>

                                    <input
                                        className='w-100'
                                        style={{ fontSize: 18, lineHeight: 0, background: 'rgb(240, 240, 240)', border: 0, height: 27, padding: 0, position: 'absolute', top: 0 }}
                                        type="location"
                                        placeholder='location'
                                        name="location"
                                        value={updateTask.location || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            :
                            <div className="col d-flex w-100"
                                style={{
                                    minHeight: edit && 27,
                                    // position: 'relative'
                                }}
                            >

                                <p className="text-secondary" style={{ fontSize: 18 }}>
                                    {details.join(' ‧ ')}
                                </p>

                            </div>

                        }
                    </div>
                    {/* end of lower row */}

                    {/* drop down notes */}
                    <div id={"all" + task.id} className="accordion-collapse collapse"
                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body row">
                            <div
                                className="col offset-1 pt-3 h-auto"
                                style={{ position: 'relative', minHeight: 50 }}
                            >



                                {edit ?
                                    <input
                                        className='w-100'
                                        type="text"
                                        name="notes"
                                        value={updateTask.notes}
                                        placeholder='Notes...'
                                        onChange={handleChange}
                                        style={{ fontSize: 18, lineHeight: 0, background: 'rgb(240, 240, 240)', border: 0, height: 27, padding: 0, position: 'absolute', top: 2 }}

                                    />
                                    :
                                    <p style={{ fontSize: 18, position: 'absolute', bottom: 25, lineHeight: 1, maxHeight: 40, overflow: 'scroll', transform: `translate(0%, 50%)`, color: task.notes? 'inherit' : 'lightgray'}}>{task.notes ? task.notes : 'no notes added'}</p>
                                }






                            </div>
                        </div>
                    </div>
                </TaskCard>

            )}

        </Draggable>

    );
}

export default Task;