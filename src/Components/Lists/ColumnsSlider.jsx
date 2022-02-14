import React, { useState, useEffect } from 'react';
import TaskColumn from './TaskColumn';

import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import {v4 as uuid} from "uuid"; 



const Container = styled.div`
    display: inline-flex;
    flex-wrap: none;
    width: auto
`


function ColumnsSlider({ lists, listOrder, onDragEnd, allTasks, handleAddList, handleEditListTitle, handleDeleteList }) {


    const handleClick = e => {
        e.preventDefault();
        const id = uuid()
        handleAddList(id)
    }



    return (
        <div className="slider w-100 h-100">

        {/* task lists contatiner */}
        <div className="slider-inner pt-md-4 ps-4">
            

        <DragDropContext
            onDragEnd={onDragEnd}
        >
        <Droppable
            type='lists'
            droppableId="all-lists"
            direction="horizontal"
        >
        {(provided, snapshot) => (
            <Container
                {...provided.droppableProps}
                ref={provided.innerRef}
                // isDraggingOver={snapshot.isDraggingOver}    
            >
                {listOrder.map((columnId, index) => 
                    <TaskColumn 
                        key={columnId} 
                        list={lists[columnId]} 
                        index={index} 
                        allTasks={allTasks} 
                        handleEditListTitle={handleEditListTitle} 
                        handleDeleteList={handleDeleteList}
                    />
                )}
                {provided.placeholder}
            </Container>
        )}
        </Droppable>


            <div
                className="pt-5 me-3" 
                style={{width: 315, display: "inline-block"}}
            >
                {/* Task list Title */}

                {/* button body */}
                <div    className="w-100" 
                        style={{background: "rgba(43, 43, 43, 0.377)",
                                borderRadius: 2,
                                flexDirection: "list",
                                display: "flex",
                                borderRadius: 3,
                                marginTop: 35.59
                                }}
                >

                    {/* list Draggable handle */}
                    <div style={{width: "100%", height: 48, position: "relative"}}>                
                        <button onClick={handleClick} className="w-100 btn bg-0 h-100" style={{color: "white", position: "absolute", top: 0}} data-testid="add-list">+ NEW LIST</button>
                    </div>

                 
                </div>
                {/* end of task list */}

            </div>
        </DragDropContext>

            {/* <TaskColumn /> */}
            {/* end of task list */}


            </div>




    </div>
    );
}

export default ColumnsSlider;