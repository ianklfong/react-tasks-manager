import React, { useState } from 'react';
import { useEffect } from 'react';

            function TaskForm({ newTask, handleSubmitTask, handleChange, listOrder, lists, handleToggleForm}) {

    const [list, setList] = useState()

    useEffect(() => {
        // if last chosen list was deleted
        if(list !== 'addNewTaskList' && listOrder.includes(list) === false) {
            // reset list state prevent adding task to deleted list
            setList()
        }
    }, [listOrder])

    // select list
    const handleSelect = e => {
        setList(e.target.value)
    }


    const handleSubmit= e => {
        e.preventDefault();
        handleSubmitTask(list)
        if(list === 'addNewTaskList') {
            setList()
        }
    }


    return (
        <>
        <div id="taskForm" className="col-auto d-lg-block">
            
            <form onSubmit={handleSubmit} className="h-100">

                {/* start of title row */}
                <div className="row mx-5" style={{height: "10%"}}>
                <div 
                    className="col-12 border-bottom" 
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                        <h3 className="pt-4 my-auto">
                            <input
                                className="border-0 w-100 bg-0"
                                type="text" 
                                placeholder="New Task Title" 
                                name="title"
                                maxLength="20"
                                value={newTask.title || ""}
                                onChange={handleChange}
                                style={{background: 0}}
                                required
                            />
                        </h3>
                    </div>
                </div>
                {/* end of title row */}
                
                {/* Start of task form  */}
                <div className="row pt-4" style={{height: "90%", overflow: "scroll"}}>
                    <div className="col-12 px-5">
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            className="mb-4"
                            // maxLength="30"
                            name="notes"
                            id="notes"
                            cols="30"
                            rows="10"
                            placeholder="Write some notes..."
                            value={newTask.notes || ""}
                            onChange={handleChange}
                        ></textarea>
                        <label htmlFor="lists">Lists</label>


                        <select
                            className="mb-4"
                            name="lists"
                            id="lists"
                            value={list || ''}
                            onChange={handleSelect}
                            required
                        >
                            <option value="" disabled >not selected</option>
                            {listOrder.length === 0 ?
                                <option value="addNewTaskList">+ New List...</option>
                            :
                                listOrder.map(column => <option value={lists[column].id} key={column}>{lists[column].title}</option>)
                            }
                            {/* <option value="Projects" disabled>Projects</option> */}
                        </select>
        
                        <input
                            className="mb-4 border-0 w-100 bg-0"
                            name="date"
                            id="date"
                            type="date"
                            placeholder="Date"
                            style={{background: 0}}
                            value={newTask.date || ""}
                            onChange={handleChange}
                        />

                        <input
                            className="border-0 w-100 bg-0 mb-4"
                            name="time"
                            id="time"
                            type="time"
                            placeholder="Time"
                            style={{background: 0}}
                            value={newTask.time || ""}
                            onChange={handleChange}
                        />
                        <input
                            className="border-0 bg-0 mb-4"
                            type="text"
                            placeholder="Location"
                            style={{background: 0}}
                            name="location"
                            value={newTask.location || ""}
                            onChange={handleChange}
                        />
                        <input type="submit" value="+ Add Task" data-testid="submit" />
                    </div>
                </div>
            </form>

    </div>
    <div className="form-backdrop" style={{position: 'absolute', width: '100vw', height: '100vh', background: 'black', borderRadius: 0}} onClick={handleToggleForm}></div>

    </>
    );
}

export default TaskForm;