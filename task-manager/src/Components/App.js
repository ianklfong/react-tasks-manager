import { useState, useEffect } from 'react';

import $ from 'jquery';

// import styled components
import styled from 'styled-components';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


// import Toggle Task Form Button
import TaskFormToggle from './TaskFormToggle';

//import Sidebar
import SideBar from './SideBar';
import HomePage from './HomePage';
import TaskForm from './TaskForm';
import ListsPage from './ListsPage';

import Main from './Main';

//database
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { testCollectionRef, listCollectionRef } from '../db'
import { db } from '../firebase-config';



const Body = styled.div`
  padding: 0;
  overflow: hidden;
`

const MainRow = styled.div`
  height: 100vh;
  overflow: hidden
`



function App() {
  // state of new task input
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState(null);


  // upload to db 
  const createTask = async () => {
    await addDoc(testCollectionRef, {
      title: newTask.title,
      notes: newTask.notes || '',
      date: newTask.date || '',
      time: newTask.time || '',
      location: newTask.location || '',
      done: newTask.done,
    });
  }


  //remove items individually
  const deleteToDoItem = async (id) => {
    const toDoItemDB = doc(db, "task", id);
    await deleteDoc(toDoItemDB);
  }

  // update items 
    const updateDoc = async (id, title, notes, date, time, location) => {
    const allTasksDoc = doc(db, "task", id);
    const newFields = {      
      title: newTask.title || '',
      notes: newTask.notes || '',
      date: newTask.date || '',
      time: newTask.time || '',
      location: newTask.location || '',
      done: newTask.done
}
    await updateDoc(newFields, allTasksDoc)  
  }



  const [allTasksList, setAllTasksList] = useState([])
  //data retrieveal 
  useEffect(() => {
    const getTest = async () => {
      const data = await getDocs(testCollectionRef);
      setAllTasksList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTest();
    return;
    // console.log(1)
  }, [allTasks])

  // lists for dnd
  // const [list, setList] = useState({})
  // const [allLists, setAllLists] = useState([])

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newTaskIds = Array.from(allTasksList);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = newTaskIds;

    setAllTasksList(newColumn);
    console.log('123')
  }

  // new task form input
  const handleChange = ({ target }) => {
    // insert corresponding name and input as porperty [name] & value in the newTask object
    const { name, value } = target;
    // generate id for each task
    const id = Date.now();

    setNewTask((prevNewTask) => ({
      ...prevNewTask,
      [name]: value,
      id: id,
      done: false,
    })
    );

    console.log(allTasks)
  };

  //submit task
  const handleSubmit = (event) => {
    // prevent default action
    // event.preventDefault();

    // shift new task in all tasks list (before previous task(s))
    setAllTasks((prevAllTasks) => ({
      ...prevAllTasks,
      [newTask.id]: newTask,
    })

    );

    // add task id to all tasks list
    setAllTasksList((prev) => ([
      ...prev,
      newTask.id
    ]))

    // empty the value of newTask
    setNewTask({});
    createTask();
  }


  //Remove tasks marked as done
  const handleRemoveDone = e => {
    e.preventDefault();
    setAllTasksList(allTasksList.filter(task => {
      //keep tasks haven't been done on list, for later return
      const taskToKeep = allTasks[task].done === false;

      // delete task(s) done
      if (allTasks[task].done === true) {
        delete allTasks[task]
      }
      return taskToKeep
    }
    ))
      ;
  }

  const handleRemoveTask = taskId => {
    delete allTasks[taskId]
    setAllTasksList(allTasksList.filter(task => task !== taskId));    
  }

  // edit task detail
  const handleEditTask = (taskId, content) => {
    setAllTasks(prevAllTasks => ({
      ...prevAllTasks,
      [taskId]: content
    }))
  }

  // // toggle task done status
  const handleToggleDone = (taskId) => {
    setAllTasks(prevAllTasks => ({
      ...prevAllTasks,
      [taskId]: {
        ...allTasks[taskId],
        done: !allTasks[taskId].done
      }
    }))
  }

  // useEffect(() => {
  //   await addDoc(testCollectionRef, allTasks);
  // }, [allTasks])

  // Toggle add task form
  useEffect(() => {
    $(document).ready(function () {
      $('#addTask').on("click", function () {
        $("#taskForm").toggleClass("active");
        $("#addBtn").toggleClass("active");
      })
    })
  }, [])


  // fetch local data from local storge on page loaded
  // useEffect(() => {
  //   if (!allTasks) {
  //     // fetch data from local storage
  //     const data = localStorage.getItem('testing-task');
  //     // add the parsed data to allTasks
  //     setAllTasks(JSON.parse(data));
  //   }
  // }, [])

  // useEffect(() => {
  //   const updateToDoItem = async (id) => {
  //     const testDoc = doc(db, "allTasks", id)
  //     // const newFields = allTasks
  //     await updateDoc(testDoc, {allTasks})
  //   }})
  //   setAllTasks(null)
  //   updateToDoItem('testtask')
  // }, [allTasks])


  // useEffect(() => {
  //   // fetch data from local storage
  //   const data = localStorage.getItem('testing-task-list');
  //   // add the parsed data to allTasks
  //   setAllTasksList(JSON.parse(data));
  // }, [])

  // // store tasks to local storage while adding task
  // useEffect(() => {
  //   localStorage.setItem('testing-task', JSON.stringify(allTasks))
  // }, [allTasks, allTasksList])

  // useEffect(() => {
  //   localStorage.setItem('testing-task-list', JSON.stringify(allTasksList))
  // }, [allTasksList])




  // const updateDoc = async () => {
  //   const allTasksDoc = doc(db, "testAllTasks", 123);
  //   const newFields = {allTasks: 'react'}
  //   await updateDoc(newFields, allTasksDoc)  
  // }






  return (
    <div className="App">
      <TaskFormToggle />
      <div className='container-fluid' style={{ padding: 0, overflow: 'hidden' }}>
        <MainRow className='row'>
          <SideBar />


          {/* <Main /> */}
          <main className="col">
            <div className="row" style={{ height: '100vh' }}>

              <HomePage
                allTasksList={allTasksList}
                allTasks={allTasks}
                handleRemoveDone={handleRemoveDone}
                onDragEnd={onDragEnd}
                handleEditTask={handleEditTask}
                handleToggleDone={handleToggleDone}
                handleRemoveTask={handleRemoveTask}
              />

              <ListsPage />


            </div>

          </main>

          <TaskForm
            newTask={newTask}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            updateDoc={updateDoc}
          />







        </MainRow>


      </div>

    </div>
  );
}

export default App;
