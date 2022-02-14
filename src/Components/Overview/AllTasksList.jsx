import { useState, useEffect } from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from './Task';

import styled from 'styled-components';

const TasksContainer = styled.div`
    overflow: hidden;
`


function AllTaskList({ lists, onDragEnd, allTasks, handleEditTask, handleToggleDone, handleRemoveTask, searchInput }) {

  const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        if ( searchInput !== ''){
            const filteredData = lists['all-tasks'].taskIds.slice().filter(taskIds => 
              {
                  console.log('ID:' + allTasks[taskIds].title);
              // Check if this string contains the search input we typed in the search bar. It also converts it to lowercase to ensure that if the user types the term in uppercase, it converts the string to lowercase to make the search more efficient.
              return allTasks[taskIds].title.toLowerCase().includes(searchInput.toLowerCase())
              })

              setSearchResults(filteredData);
            } else {return}
        // console.log('result'+ searchResults)
    }, [searchInput])

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="row task-list" style={{ maxHeight: 645 }}>
                {/* start of task list */}
                <div className="col-12">

                    {/* start of task container */}
                    <Droppable
                        droppableId="all-tasks"
                        type="all-tasks"
                    >
                        {(provided, snapshot) => (
                            <TasksContainer
                                className='mx-5 h-100'
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            // isDraggingOver={snapshot.isDraggingOver}    
                            >
                                
               
                                {searchInput.length >= 1 ? (
                                    searchResults.length === 0 ?
                                    <p className='text-center mt-5' style={{fontSize: 30}}>No Matched Result Task</p>
                                    :
                                    searchResults.map((taskId, index) => {
                                                return <Task
                                                    key={allTasks[taskId].id}
                                                    index={index}
                                                    task={allTasks[taskId]}
                                                    handleEditTask={handleEditTask}
                                                    handleToggleDone={handleToggleDone}
                                                    handleRemoveTask={handleRemoveTask}
                                                    isDragDisabled={true}
                                                />
                                    })
                                ) : (
                                    // Object.keys(allTasks).length > 0 && 
                                    lists['all-tasks'].taskIds.map((taskId, index) =>
                                        <Task
                                            key={allTasks[taskId].id}
                                            index={index}
                                            task={allTasks[taskId]}
                                            handleEditTask={handleEditTask}
                                            handleToggleDone={handleToggleDone}
                                            handleRemoveTask={handleRemoveTask}
                                            isDragDisabled={false}
                                        />
                                    ))
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