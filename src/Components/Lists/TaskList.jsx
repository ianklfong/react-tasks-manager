import React, { useState } from 'react';


import Task from './Task'
import { Droppable, Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';


const Column = styled.div`
    width: 315px;
    display: inline-block;
    // margin-left: -30px
`

const TaskList = styled.div`
    padding: 8;
    transition: background 0.2 ease;
    min-height: 100;
    border-bottom-leftRadius: 3;
    border-bottom-rightRadius: 3
`

function TaskColumn({ list, index, allTasks, handleEditListTitle, handleDeleteList, handleToggleDone, handleRemoveTask, handleEditTask, isDragDisabled}) {


    const [title, setTitle] = useState(list.title)

    const handleChange = e => {
        setTitle(e.target.value)
        handleEditListTitle(list.id, e.target.value)
    }


    const [edit, setEdit] = useState(false);

    return (

        <Draggable
            draggableId={list.id.toString()}
            index={index}
            isDragDisabled={isDragDisabled}
        >
            {provided => (

                <Column 
                    className="pt-md-5 me-3 ms-sm-0"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >

                    <div style={{
                        height:27.59,
                        marginBottom: 8,
                        position: 'relative'
                        }}

                    >


                    {edit ?
                        <input 
                            value={title}
                            name="title"
                            onChange={handleChange}
                            onBlur={() => setEdit(!edit)}
                            style={{
                                fontSize: 23,
                                // marginBottom: ".5rem",
                                lineHeight: 0,
                                background: 'lightgrey',
                                border: 0,
                                fontWeight: 600,
                                position: 'absolute',
                                top: -5,
                                left: -2
                            }}
                        />
                    :
                    <h3 
                            onClick={() => setEdit(!edit)}

                            style={{

                                position: 'absolute',
                                top: 0
                            }}
                            data-testid="list-title"

                    >
                        {list.title}
                    </h3>
                    }




                    </div>

                    {/* Task list Title */}

                    {/* Task list Container */}
                    <div 
                        className="w-100 task-list"
                        style={{ 
                            borderRadius: 2,
                            flexDirection: "column",
                            display: "flex",
                            borderRadius: 3
                        }}
                    >

                        {/* list Draggable handle */}
                        <div 
                         {...provided.dragHandleProps}
                            style={{
                                    padding: 24,
                                    position: "relative"
                            }}
                        >
                            {/* remove list icon */}
                            {list.taskIds.length === 0 && !isDragDisabled && <svg 
                                type='button'
                                onClick={() => {handleDeleteList(list.id)}}
                                style={{position: "absolute", right: 15, top: 15}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                
                                d="M7.6875 11.25H16.3125C16.4156 11.25 16.5 11.3344 16.5 11.4375V12.5625C16.5 12.6656 16.4156 12.75 16.3125 12.75H7.6875C7.58437 12.75 7.5 12.6656 7.5 12.5625V11.4375C7.5 11.3344 7.58437 11.25 7.6875 11.25Z" fill="#70bbae"/>
                                <path d="M12 1.5C17.7984 1.5 22.5 6.20156 22.5 12C22.5 17.7984 17.7984 22.5 12 22.5C6.20156 22.5 1.5 17.7984 1.5 12C1.5 6.20156 6.20156 1.5 12 1.5ZM12 20.7188C16.8141 20.7188 20.7188 16.8141 20.7188 12C20.7188 7.18594 16.8141 3.28125 12 3.28125C7.18594 3.28125 3.28125 7.18594 3.28125 12C3.28125 16.8141 7.18594 20.7188 12 20.7188Z" fill="#70bbae"/>
                            </svg>}
                            
                        </div>



                        <Droppable
                            droppableId={list.id.toString()}
                            type="tasks"
                        >
                            {(provided, snapshot) => (
                                
                            

             
                        <TaskList
                                style={{
                                    padding: 8,
                                    overflow: 'scroll',
                                    maxHeight: 600
                                }}
                                ref={provided.innerRef}
                        >

                            {/* Task */}
                            {/* <TaskCard task={allTasks['task-1']}/> */}
                            {list.taskIds.map((id, index) => 
                            <Task
                                index={index} 
                                key={allTasks[id].id} 
                                task={allTasks[id]}

                                handleEditTask={handleEditTask}
                                handleToggleDone={handleToggleDone}
                                handleRemoveTask={handleRemoveTask}
                            />

                            )}

                            {provided.placeholder}
                        </TaskList>

                        


                        )}
                        </Droppable>










                    </div>
                    {/* end of task list */}

                </Column>
            )}
        </Draggable>

    );
}

export default TaskColumn;