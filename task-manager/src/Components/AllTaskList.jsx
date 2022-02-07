import React, { useState, useEffect } from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from './Task';

import styled from 'styled-components';

const TasksContainer = styled.div`
    overflow: hidden;
`


function AllTaskList({ deleteToDoItem, allTasksList, onDragEnd, allTasks, handleEditTask, handleToggleDone, handleRemoveTask }) {
    return (
        <DragDropContext className='mx-5' onDragEnd={onDragEnd}>
        <div className="row  task-list">
            {/* start of task list */}
            <div className="col-12">

                {/* start of task container */}
                    <Droppable
                        droppableId="allTask"
                        type="allTask"
                    >
                    {(provided, snapshot) => (
                        <TasksContainer
                            className='mx-5 h-100'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            // isDraggingOver={snapshot.isDraggingOver}    
                        >
                            
                            {
                            // ? allTasksList.map((taskId, index) => 
                            //     <Task 
                            //         key={allTasks[taskId].id}
                            //         index={index}
                            //         task={allTasks[taskId]}
                            //         handleEditTask={handleEditTask}
                            //         handleToggleDone={handleToggleDone}
                            //         handleRemoveTask={handleRemoveTask}
                            //     />)

                            allTasksList.map((ele, index) => 
                                <Task 
                                    // key={allTasks[taskId].id}
                                    index={index}
                                    task={ele}
                                    // handleEditTask={handleEditTask}
                                    handleToggleDone={handleToggleDone}
                                    deleteToDoItem={deleteToDoItem}
                                    // handleRemoveTask={handleRemoveTask}
                                />)
                            }   

                            {provided.placeholder}
                        </TasksContainer>  

                    )}

                    </Droppable>
        
                {/* end of task container */}

            </div>
            {/* end of task list */}
        </div>
        </DragDropContext>

    );
}

export default AllTaskList;