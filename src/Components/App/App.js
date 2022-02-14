import logo from './logo.svg';
import React from 'react';

// import Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import Components
import Welcome from '../Welcome/Welcome';
import Task from '../Task/Task';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { TaskList } from '../../Components/TaskList/TaskList';
import { Hamburger } from '../../Components/Hamburger/Hamburger';
import { Clock } from '../../Components/Clock/Clock';
import { AddTask } from '../../Components/AddTask/AddTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        done: false,
      },
      allTasks: [],
      rightColStatus: false,
    }
    this.toggleRight = this.toggleRight.bind(this)
    // this.handleChangeSubject = this.handleChangeSubject.bind(this)
    // this.handleChangeTime = this.handleChangeTime.bind(this)
    // this.handleChangeLocation = this.handleChangeLocation.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  toggleRight() {
    this.setState({
      rightColStatus: !this.state.rightColStatus
    })
  } 

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      allTasks: this.state.allTasks.concat(this.state.task),
      task: {
        done: false
      },
      rightColStatus: !this.state.rightColStatus
    })
    console.log(this.state.allTasks)
  }

  handleChange(e) {
    this.setState({
      task: {
        ...this.state.task,
        [e.target.name]: e.target.value,
      }
    })
  }

  

  render() {
    return (
      <div className="App wrapper">


        <header>
          {/* <!-- Start of Navigation Bar --> */}

          <NavigationBar onClick={this.toggleRight} rightColState={this.state.rightColStatus}/>

          {/* <!-- End of Navigation Bar --> */}


        </header>


        {/* <!-- Start of main container --> */}
        <main className="py-5">
          <div className="mx-auto h-100">
            {/* <!-- Start of main row --> */}
            <div className="row h-100">
              {/* <!-- Start of left column --> */}
              <div className="col-md-6 d-none d-md-block">
                {/* <Welcome /> */}
                <TaskList allTasks={this.state.allTasks}/>
              </div>
              {/* <!-- End of left column --> */}

              {/* Start of right column */}
              <div className='col-md-6' data-testid="testing">

                {this.state.rightColStatus && 
                <AddTask  onClick={this.handleSubmit}
                          onChange={this.handleChange}
                />}
              </div>
              {/* End of right column */}
            </div>
          </div>
        </main>


      </div>
    )
  }
}

export default App;