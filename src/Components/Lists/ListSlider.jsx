import { useState, useEffect } from 'react';
import TaskColumn from './TaskList';

import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { v4 as uuid } from "uuid";


const Container = styled.div`
    display: inline-flex;
    flex-wrap: none;
    width: auto
`


function ListSlider({ searchInput, lists, listOrder, onDragEnd, allTasks, handleAddList, handleEditListTitle, handleDeleteList, handleToggleDone, handleRemoveTask , handleEditTask }) {

    const [searchList, setSearchList] = useState([]);
    
    useEffect(() => {
        if ( searchInput !== ''){
            const filteredList = listOrder.slice();
            let matchedTitle = []
            let matchedTasks = []

            filteredList.map(list => {
                if(lists[list].title.toLowerCase().includes(searchInput.toLowerCase())){
                    matchedTitle.push(list)
                    console.log('list' + list)
                }
             // check list if contains task matches the search input 
            //    if (allTasks['all-tasks'].taskIds.title.toLowerCase().inclues(searchInput.toLowerCase())) {

            //    }
            //    if (!list[list].taskIds) {
            //         return}
            //     else if(lists[list].taskIds.map(task => allTasks[task].title.toLowerCase().includes(searchInput.toLowerCase()))){
            //             matchedTasks.push(list)
            //             console.log('task'+list)
            //         }
            }
            )
                const matches = matchedTitle.concat(matchedTasks);
                setSearchList(matches);
            } else {return}
    }, [searchInput])


    const handleClick = e => {
        e.preventDefault();
        const id = uuid()
        handleAddList(id);       
    }

    return (

        <div 
            className="slider w-100 h-100 ms-sm-0"
            style={{overflowX: 'auto'}}
        >

            {/* task lists contatiner */}
            <div 
                className="slider-inner pt-md-1 ps-sm-4">


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

                                {searchInput.length > 0 ?
                                    searchList.map((columnId, index) =>
                                    <TaskColumn
                                        key={columnId}
                                        list={lists[columnId]}
                                        index={index}
                                        allTasks={allTasks}
                                        handleEditListTitle={handleEditListTitle}
                                        handleDeleteList={handleDeleteList}
                                        isDragDisabled={true}
                                        handleEditTask={handleEditTask}
                                        handleToggleDone={handleToggleDone}
                                        handleRemoveTask={handleRemoveTask}
                                    />
                                )
                                    :
                                listOrder.map((columnId, index) =>
                                    <TaskColumn
                                        key={columnId}
                                        list={lists[columnId]}
                                        index={index}
                                        allTasks={allTasks}
                                        handleEditListTitle={handleEditListTitle}
                                        handleDeleteList={handleDeleteList}
                                        isDragDisabled={false}
                                        handleEditTask={handleEditTask}
                                        handleToggleDone={handleToggleDone}
                                        handleRemoveTask={handleRemoveTask}
                                    />
                                )

                                }
                                {provided.placeholder}
                            </Container>
                        )}
                    </Droppable>


                    {/* add list button */}
                    {searchInput.length === 0 &&
                    
                    <div className="pt-5 me-3" style={{ width: 315, display: "inline-block" }}>
                        {/* Task list Title */}

                        {/* button body */}
                        <div className="w-100"
                            style={{
                                background: "rgba(43, 43, 43, 0.377)",
                                borderRadius: 2,
                                flexDirection: "list",
                                display: "flex",
                                borderRadius: 3,
                                marginTop: 35.59
                            }}
                        >

                            <div style={{ width: "100%", minWidth: 315, height: 48, position: "relative" }}>
                                <button onClick={handleClick} className="w-100 btn bg-0 h-100" style={{ color: "white", position: "absolute", top: 0 }}>+ NEW LIST</button>
                            </div>


                        </div>
                        {/* end of task list */}

                    </div>
                    }
                </DragDropContext>

                {/* <TaskColumn /> */}
                {/* end of task list */}


            </div>




        </div>

    );
}

export default ListSlider;