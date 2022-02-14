import React from 'react';
import { useState, useEffect } from 'react';

// import Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import Components
import Welcome from '../Welcome/Welcome';
import NavigationBar from '../NavigationBar/NavigationBar(Refactor)';
import TaskList from '../TaskList/TaskList(Refactor)';
// import AddTask from '../AddTask/AddTask';
// import AddTask from '../AddTask/AddTask(Refactor)';
import AddTask from '../AddTask/AddTask(Refactor)';
import { SortablePane, Pane } from 'react-sortable-pane';


export default function App() {

	// state of new task input
	const [newTask, setNewTask] = useState({});

	// inputing form
	const handleChange = ({ target }) => {
		// insert corresponding name and input as porperty [name] & value in the newTask object
		const { name, value, note } = target;
		setNewTask((prevNewTask) => ({
			...prevNewTask,
			[name]: value,
			id: Date.now().toString(),
			done: false,
			[note]: value,
		})
		);
	};

	// state of right column
	const [rightCol, setRightCol] = useState(true)

	//toggle right column status
	const handleToggle = () => {
		// if rightCol = true, then turn false, vice-versa
		setRightCol(!rightCol);
	}

	// state of all task list
	const [allTasks, setAllTasks] = useState([])

	//submit task
	const handleSubmit = (event) => {
		// prevent default action
		event.preventDefault();
		// nothing happens if no title input
		if (!newTask.title) {
			alert('Please provide a title for your task');
			return;
		};
		// shift new task in all tasks list (before previous task(s))
		setAllTasks((prevAllTasks) => [
			newTask,
			...prevAllTasks],
		);
		// empty the value of newTask
		setNewTask({});
		// toggle right column display
		setRightCol(!rightCol);
	}

	const removeDone = (e) => {
		e.preventDefault();
		setAllTasks(allTasks.filter(task => task.done === false))
	}

	// const panes = allTasks.map((v, index) => (
	// 	<Pane key={index} style={{backgroundColor:'red'}} defaultSize={{ width: '100%', height: 120 }}>
	// 	</Pane>
	// ));


	// render

	//store data in local storage with useEffect
	
	useEffect(() => {
		const data = localStorage.getItem('testing-task-list');
		setAllTasks(JSON.parse(data));
		
	}, [1])
	
	useEffect(() => {
		localStorage.setItem('testing-task-list', JSON.stringify(allTasks))
	})


	return (
		<div className="App wrapper">
			<header>
				{/* Start of Navigation Bar */}
				<NavigationBar rightCol={rightCol} handleToggle={handleToggle} />
				{/* End of Navigation Bar */}
			</header>

			{/* Start of main container */}
			<main className="py-5">
				<div className="mx-auto h-100">
					{/* Start of main row */}
					<div className="row h-100">
						{/* Start of left column */}
						<div className="col-md-6 d-none d-md-block">
							{/* <Welcome /> */}
							<TaskList
								allTasks={allTasks}
								setAllTasks={setAllTasks}
								removeDone={removeDone}
							/>
						</div>
						{/* End of left column */}
						{/* Start of right column */}
						<div className='col-md-6'>
							{rightCol &&
								<AddTask
									newTask={newTask}
									handleSubmit={handleSubmit}
									handleChange={handleChange}
								/>
							}
						</div>
						{/* End of right column */}
					</div>
				</div>
			</main>


		</div>
	)
}
