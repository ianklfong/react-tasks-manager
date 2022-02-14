import { useState, useEffect } from 'react';

import useLocalStorage from "use-local-storage"

// import JQuery
import $ from 'jquery';
// import uuid
import { v4 as uuid } from "uuid";
// import styled components
import styled from 'styled-components';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// custom stylesheet
import './App.css';

// React Components
// import Task Form Switch Button
import TaskFormToggle from './TaskFormToggle';
// import Sidebar
import SideBar from './SideBar';
// import nav bar for moblie
import MobileNav from './MobileNav';
// import section 1 - Overview
import Overview from './Overview/Overview';
// import section 2 - Lists Page
import ListsPage from './Lists/ListsPage';
// impot add Task Form
import TaskForm from './TaskForm';
//import calendar
import { Scheduler } from './Calendar';

const MainRow = styled.div`
  height: 100vh;
  overflow: hidden
`

function App() {


  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar)
  }
  const [taskForm, setTaskForm] = useState(false);

  // new task input state
  const [newTask, setNewTask] = useState({});

  const [searchInput, setSearchInput] = useState('');
  // The new state of the filtered data

  const handleSearchInput = e => {
    setSearchInput(e)
  }

  // new task form input
  const handleChange = ({ target }) => {
    // insert corresponding name and input as porperty [name] & value in the newTask object
    const { name, value } = target;
    // generate id for each task
    const id = uuid();
    // add value to coresponding key
    setNewTask(prevNewTask => ({
      ...prevNewTask,
      [name]: value,
      id: id,
      // intial task done as false (unfinished task)
      done: false,
    })
    );
  };

  // all tasks data storage
  const [allTasks, setAllTasks] = useLocalStorage('allTasks', {});

  // task lists storage
  const [lists, setLists] = useLocalStorage('lists', {
    // storing all tasks order for section 1 - Overview
    'all-tasks': {
      // list id, also as the list key when storing in the lists
      id: 'all-tasks',
      title: 'All Tasks',
      // storing task id in the array to manage the tasks order
      taskIds: []
    },
  })

  // task list order (for drag and drop)
  const [listOrder, setListOrder] = useLocalStorage('listOrder', [])


  // add new list
  const handleAddList = id => {

    setLists(prev => ({
      ...prev,
      // new list (use its id as the property key)
      [id]: {
        // list id
        id: id,
        // list title
        title: 'New List',
        // tasks belonged to the list
        taskIds: [],
      }

    }))
    // push the new list at the end of all lists
    setListOrder(prev => ([
      ...prev,
      id
    ]))
  }

  // delete list
  const handleDeleteList = listId => {

    const newListOrder = Array.from(listOrder)
    const filteredLists = newListOrder.filter(list => list !== listId);

    setListOrder(filteredLists)

    const newLists = { ...lists }
    for (let key in newLists) {
      if (newLists[key].id === listId) {
        delete newLists[key]
      }
    }

    setLists(newLists)
  }

  // change list name
  const handleEditListTitle = (id, title) => {
    if (title.length === 0) {
      setLists(prev => ({
        ...prev,
        [id]: {
          ...lists[id],
          title: 'unnamed list'
        }
      }))
      return;
    }

    setLists(prev => ({
      ...prev,
      [id]: {
        ...lists[id],
        title: title
      }
    }))
  }


  // reorder tasks order on drag end
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (
      // if item is dropped outside of the droppable area or...
      !destination ||
      (
        // if item is dropped at the same position as its place
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      )
    ) {
      // terminate function
      return;
    }


    if (type === 'lists') {
      const newColumnOrder = Array.from(listOrder);

      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setListOrder(newColumnOrder);

      return;
    }


    // declare starting point (check which droppable id the item is from)
    const start = lists[source.droppableId];
    // declare destination point (check which droppable id the item is dropped)
    const finish = lists[destination.droppableId];

    // if the items dropped as the same droppable id it belongs
    if (start === finish) {
      // make a copy of the task ids order array
      const newTaskIds = Array.from(start.taskIds);

      // remove 1 item (the dragging item(id)) from the original index of the droppable 
      newTaskIds.splice(source.index, 1);
      // remove 0 item from the destination index of the droppable, 
      // add the dragging item(id) after the index 
      newTaskIds.splice(destination.index, 0, draggableId);

      // update data in the column
      setLists(prev => ({
        ...prev,
        [start.id]: {
          ...start,
          taskIds: newTaskIds
        }
      }));

      return;
    }


    // Moving from one list to another
    // make a copy of the task ids array of the starting droppable
    const startTaskIds = Array.from(start.taskIds);
    // remove 1 item (dragging item(draggable id)) from the original index of the droppable
    startTaskIds.splice(source.index, 1);

    // make a new state for later update the starting column data
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    // make a copy of the task ids array of the destination droppable
    const finishTaskIds = Array.from(finish.taskIds);
    // remove 0 item from the destination index of the droppable, 
    // add the dragging item(id) after the index 
    finishTaskIds.splice(destination.index, 0, draggableId)

    // make a new state for later update the destination column data
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    // update lists data
    setLists(prev => ({
      ...prev,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    }))

  }

  //submit new task
  const handleSubmitTask = list => {
    // put new task into allTasks state
    setAllTasks(prevAllTasks => ({
      ...prevAllTasks,
      [newTask.id]: newTask,
    })
    );

    // if there is no list created and users choose to create new list as adding new task
    if (list === "addNewTaskList") {
      // generate new id for new list
      const id = uuid();
      setLists(prev => ({
        ...prev,
        'all-tasks': {
          ...lists['all-tasks'],
          taskIds: [...lists['all-tasks'].taskIds, newTask.id]
        },
        // new column 
        [id]: {
          // column id
          id: id,
          // column title
          title: 'New List',
          // add new task to the new list
          taskIds: [newTask.id],
        }
      }))

      setListOrder(prev => ([
        ...prev,
        id
      ]))

    }

    else {
      setLists(prev => ({
        ...prev,
        'all-tasks': {
          ...lists['all-tasks'],
          // push the task to all tasks
          taskIds: [...lists['all-tasks'].taskIds, newTask.id]
        },
        // update the list according to the argument passed in (corresponding list id)
        [list]: {
          ...lists[list],
          // push the task to the list
          taskIds: [...lists[list].taskIds, newTask.id]
        }
      }))
    }

    // empty the value of newTask
    setNewTask({});
  }

  // remove tasks marked as done
  const handleRemoveDone = () => {
    // first, delete the task id data in the corresponding list
    // use for...loop to locate the target task in corresponding lists
    for (let key in lists) {
      // filter the target task (marked as done) away
      let newIds = lists[key].taskIds.filter(task => allTasks[task].done === false);
      //update the list
      setLists(prev => ({
        ...prev,
        [key]: {
          ...lists[key],
          taskIds: newIds
        }
      }))
    }
    // duplicate an allTasks object
    const newAllTasks = { ...allTasks };
    // loop through each key(task) of newAllTasks
    for (let key in newAllTasks) {
      // check if any key (task)'s done status is true
      if (newAllTasks[key].done === true) {
        // delete that key (task)
        delete newAllTasks[key]
      }
    }
    // update allTasks with newAllTasks    
    setAllTasks(newAllTasks);
  }
  // remove task individually
  const handleRemoveTask = taskId => {

    for (let key in lists) {
      let newIds = lists[key].taskIds.filter(task => allTasks[task].id !== taskId);
      setLists(prev => ({
        ...prev,
        [key]: {
          ...lists[key],
          taskIds: newIds
        }
      }))

    }

    const newAllTasks = { ...allTasks }
    for (let key in newAllTasks) {
      if (newAllTasks[key].id === taskId) {
        delete newAllTasks[key]
      }
    }

    setAllTasks(newAllTasks)
  }
  // edit task detail
  const handleEditTask = (taskId, updatedContent) => {
    setAllTasks(prevAllTasks => ({
      ...prevAllTasks,
      [taskId]: updatedContent
    }))
  }
  // toggle task done status
  const handleToggleDone = (taskId) => {
    setAllTasks(prevAllTasks => ({
      ...prevAllTasks,
      [taskId]: {
        ...allTasks[taskId],
        done: !allTasks[taskId].done
      }
    }))
  }

  // toggle task form
  const handleToggleForm = () => {
    $("#taskForm").toggleClass("active");
    $("#addBtn").toggleClass("active");
    $(".form-backdrop").toggleClass("active");
    $("#addBtnMobile").toggleClass("active")

    setTaskForm(!taskForm)
    // console.log(allTasks)
  }

  const [dark, setDark] = useState(false);

  const handleDark = () => {
    setDark(!dark);
    $("p").toggleClass("dark");
    $('#sidebar').toggleClass('dark');
    $('.nav-icon1').toggleClass('dark');
    $('.nav-icon2').toggleClass('dark');
    $('#Home').toggleClass('dark');
    $('h3').toggleClass('dark');
    $('#taskForm').toggleClass('dark');
    $('.pinned-list').toggleClass('dark');
    $('.searchBar').toggleClass('dark');
    $('.bAqmpU').toggleClass('dark');
    $('input').toggleClass('dark');
    $('label').toggleClass('dark');
    $('#Lists').toggleClass('dark');
    $('h4').toggleClass('dark');
    $('.iZPNWi').toggleClass('dark');
    $('textarea').toggleClass('dark');
    $('select').toggleClass('dark');
    $('.task-list').toggleClass('dark');
    $('.removeDone').toggleClass('dark');
    $('.Gohid').toggleClass('dark');
    $('#search').toggleId('dark');
}


  return (
    <div className="App">
      <TaskFormToggle 
        handleToggleForm={handleToggleForm}
      />
      <MobileNav 
        handleToggleForm={handleToggleForm} 
        handleSidebar={handleSidebar}
      />

      <div className='container-fluid' style={{ padding: 0, overflow: 'hidden' }}>
        <MainRow className='row'>
          <SideBar 
            dark={dark} 
            handleDark={handleDark} 
            handleSidebar={handleSidebar}
          />


          <main className="col">
            <div className="row" style={{ height: '100vh' }}>

              <Overview
                lists={lists}
                listOrder={listOrder}
                handleRemoveDone={handleRemoveDone}
                onDragEnd={onDragEnd}
                allTasks={allTasks}
                handleEditTask={handleEditTask}
                handleToggleDone={handleToggleDone}
                handleRemoveTask={handleRemoveTask}
                searchInput={searchInput}
                handleSearchInput={handleSearchInput}
                sidebar={sidebar}
                taskForm={taskForm}
                handleEditListTitle={handleEditListTitle}
              />

              <ListsPage
                lists={lists}
                listOrder={listOrder}
                onDragEnd={onDragEnd}
                allTasks={allTasks}
                handleAddList={handleAddList}
                handleEditListTitle={handleEditListTitle}
                handleDeleteList={handleDeleteList}

                handleEditTask={handleEditTask}
                handleToggleDone={handleToggleDone}
                handleRemoveTask={handleRemoveTask}
              />


            <Scheduler
              allTasks={allTasks}
            />
            
            </div>


          </main>

          <TaskForm
            newTask={newTask}
            handleSubmitTask={handleSubmitTask}
            handleChange={handleChange}
            listOrder={listOrder}
            lists={lists}
            handleToggleForm={handleToggleForm}
          />

        </MainRow>


      </div>

    </div>
  );
}

export default App;
