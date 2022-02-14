// import React
import React from "react";

// import stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddTask.css';


export default function AddTask({ newTask, handleSubmit, handleChange }) {
	return (
		<div className="row h-100">
			<div className="col">
				<form className="h-100">
					{/*<!-- Start of upper part: Title -->*/}
					<div className="row border-bottom title-row">

						{/* Title column */}
						<div className="col">
							{/* <h3 className="mb-0 mt-2 title">ALL TASKS</h3> */}

							{/* New Task Title Input */}
							<input
							data-testid="testing"
								className="mt-1 border-0 title w-100 new-task-title"
								// type="text" 
								name="title"
								value={newTask.title || ""}
								placeholder="New Task Title"
								onChange={handleChange}
							/>

						</div>
					</div>
					{/*<!-- End of upper part: Title -->*/}

					{/*<!-- Start of lower part: List -->*/}
					<div className="row">
						<div className="col mt-4 note-col">
							{/* Input notes */}
							<input
								className="w-100 add-task subtitle mt-5"
								name='note'
								type="text"
								placeholder="Notes"
								value={newTask.note}
								onChange={handleChange}
							>
							</input>

							{/* Assign to list (dropdown menu)*/}
							<select className="w-100 add-task mt-5 notes-list" name="cars" id="list">
								{/* dropdown menu placeholder */}
								<option value="" disabled selected>Assign to</option>
								{/* Options hardcode */}
								<option value="Daily">Daily</option>
								<option value="grocesory">Grocesory</option>
								<option value="final-project">Final Project</option>
								<option value="work">Work</option>
							</select>


							<div className="mt-5">
								{/* date icon */}
								<i class="fas fa-calendar-alt small-icon details-icon"></i>
								{/* Input date */}
								<input
									id="date"
									type="date"
									className="add-task ms-2 input-boxs details-text"
									name="date"
									// value={newTask.date} 
									placeholder="Date"
									// onfocus="(this.type = 'date')" onBlur={this.type='text'}
									onChange={handleChange}
								/>
							</div>

							<div className="mt-5">
								{/* time icon */}
								<i className="fas fa-clock small-icon details-icon"></i>
								{/* Input time */}
								<input
									className="add-task ms-2 input-box details-text"
									type="time"
									name="time"
									value={newTask.time || ""}
									placeholder="time"
									// onfocus="(this.type = 'time')" onblur="(this.type='text')"
									onChange={handleChange}
								>
								</input>

							</div>
							<div className="mt-5">
								{/* location icon */}
								<i className="fas fa-map-marker-alt small-icon details-icon" ></i>
								{/* Input location */}
								<input
									className="add-task ms-2 input-boxs details-text"
									name="location"
									// value={newTask.location}
									type="text"
									placeholder="Location"
									onChange={handleChange}
								>
								</input>

								<br></br>

								{/* <div className="col"></div> */}
							</div>
							<div className="mt-5">
								<i className="fas fa-plus"></i>
								{/* Add task button */}
								<button
								data-testid="addtask"
									className="add-task ms-2 input-boxs submit-btn"
									type="submit"
									onClick={handleSubmit}
								>
									Add Task
								</button>
							</div>
						</div>
					</div>
					{/*<!-- End of lower part: Task List -->*/}
				</form>
			</div>
		</div>
	)
}
