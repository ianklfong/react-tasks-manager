// import React
import React from "react";
// import { SortablePane, Pane } from 'react-sortable-pane';

// import stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskList.css';

// import task component
import Task from '../Task/Task(Refactor)';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function TaskList({ allTasks, setAllTasks, removeDone }) {   
    //  draggable panes for individual taks
    //  const panes = allTasks.map((task, index) =><Pane key={index} defaultSize={{ width: '100%', height: 120 }}><div className="list-group-item"><Task task={task} /></div></Pane>)

    const onDragEnd = result => {
        const { destination, source, draggableId, type } = result;

        if(!destination) {
            return;
        }

        if(
            destination.draggableId === source.draggableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newTasksOrder = Array.from(allTasks);
        newTasksOrder.splice(source.index, 1);
        newTasksOrder.splice(destination.index, 0, draggableId);

        setAllTasks(newTasksOrder);
    }

    return (
        <div className="row h-100">
            <div className="col">
                {/* <!-- Start of upper part: Title --> */}
                <div className="row border-bottom title-row">
                    <div className="col">
                        <h3 className="mb-0 mt-2 title">
                            ALL TASKS
                        </h3>
                    </div>
                </div>
                {/* <!-- End of upper part: Title --> */}
                {/* <!-- Start of lower part: List --> */}
                <div className="row">
                    <div className="btnClass">
                        {/* <div className="dropdown">
                            <button className="dropbtn  fas fa-chevron-down">SORT BY</button>
                            <div className="dropdown-content">
                                <a href="#">A-Z</a>
                                <a href="#">Z-A</a>
                            </div>
                        </div> */}
                        <div className="remove">
                            <button className="removebtn" onClick={removeDone}>REMOVE DONE</button>
                        </div>
                    </div>
                    {/* <!-- Start of main column --> */}
                    <div className="col mt-4 main-column">
                        {/* <!-- Start of the list --> */}
                            <DragDropContext
                                onDragEnd={onDragEnd}
                            >
                                <Droppable
                                     droppableId="1"
                                     type="task"
                                >
                                    {(provided, snapshot) => (
                                             <div
                                             {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                isDraggingOver={snapshot.isDraggingOver}
                                                // className="list-group list-group-flush w-100"
                                                className="w-100"
                                            >
                                                {/* <!-- Task Item(s) --> */}
                                                {allTasks.map((task, index) => (
                                                    <Task task={task} index={index}/>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                            
                                    )}
                                </Droppable>
                            </DragDropContext>
                        {/* containers for draggable tasks panes */}
                        {/* <div>
                        <SortablePane direction="vertical" margin={100}>{panes}</SortablePane>
                    </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}


// export class TaskList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.sortByAZ = this.sortByAZ.bind(this);
//         this.sortByZA = this.sortByZA.bind(this);
//     }
//     sortByAZ(a, b) {
//         if (a.text > b.text) {
//             return 1;
//         } else if (a.text == b.text) {
//             return 0;
//         } else {
//             return -1;
//         }
//     }
//     sortByZA(a, b) {
//         if (a.text < b.text) {
//             return 1;
//         } else if (a.text == b.text) {
//             return 0;
//         } else {
//             return -1;
//         }
//     }

// }