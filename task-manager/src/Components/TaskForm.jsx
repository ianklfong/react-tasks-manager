import React,{useState} from 'react';

//database
import {addDoc } from 'firebase/firestore'
import {testCollectionRef} from '../db'


function TaskForm({ newTask, handleSubmit, handleChange, updateDoc}) {

    return (
        <div id="taskForm" className="col-auto d-none d-lg-block">

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
                                // onChange={(event) => setNewTitle(event.target.value)}
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
                            maxLength="30"
                            name="notes"
                            id="notes"
                            cols="30"
                            rows="10"
                            placeholder="Write some notes..."
                            value={newTask.notes || ""}
                            onChange={handleChange}
                            // onChange={(event) => setNewNotes(event.target.value)}
                        ></textarea>
                        <label htmlFor="lists">Lists</label>
                        <select
                            className="mb-4"
                            name="lists"
                            id="lists"
                            value={newTask.list || "not selected"}
                            onChange={handleChange}
                        >
                            <option value="not selected"  disabled>not selected</option>
                            <option value="Projects" disabled>Projects</option>
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
                            // onChange={(event) => setNewDate(event.target.value)}

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
                        <input type="submit" value="+ Add Task"/>
                    </div>
                </div>
            </form>
    </div>
    );
}

export default TaskForm;