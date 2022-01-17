import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskList.css';
import Task from '../Task/Task';

<<<<<<< HEAD
export class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.sortByAZ = this.sortByAZ.bind(this);
        this.sortByZA = this.sortByZA.bind(this);
    }
    sortByAZ(a, b) {
        if (a.text > b.text) {
            return 1;
        } else if (a.text == b.text) {
            return 0;
        } else {
            return -1;
        }
    }
    sortByZA(a, b) {
        if (a.text < b.text) {
            return 1;
        } else if (a.text == b.text) {
            return 0;
        } else {
            return -1;
        }
    }
    render() {
        return (
            <div>
                <div>
                    {/* <!-- Start of upper part: Title --> */}
                    <div className="row title-row">
                        <div className="col mt-2 pb-2 border-bottom">
                            <h3 className="mb-0 mt-1 title">All Tasks</h3>
                        </div>
                    </div>
                    {/* <!-- End of upper part: Title --> */}
                    <div className="btnClass">
                        <div className="dropdown">
                            <button className="dropbtn  fas fa-chevron-down">SORT BY</button>
                            <div className="dropdown-content">
                                <a href="#" onClick={this.sortByAZ}>A-Z</a>
                                <a href="#" onClick={this.sortByZA}>Z-A</a>
                            </div>
                        </div>
                        <div className="remove">
                            <button className="removebtn">REMOVE DONE</button>
                        </div>
                    </div>


                    {/* <!-- Start of lower part: List --> */}
                    <div className="row">
                        {/* <!-- Start of main column --> */}
                        <div className="col mt-4 main-column">
                            {/* <!-- Start of the list --> */}
                            <ul className="list-group list-group-flush w-100">

                                {/* <!-- Task Item(s) --> */}
                                {this.props.allTasks.map(task => <li className="list-group-item"><Task task={task}/></li>)}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
=======

export default function TaskList(props) {
    return (
        <div>
            <div>
                {/* <!-- Start of upper part: Title --> */}
                <div className="row title-row">
                    <div className="col mt-2 pb-2 border-bottom">
                        <h3 className="mb-0 mt-1 title">All Tasks</h3>
                    </div>
                </div>
                {/* <!-- End of upper part: Title --> */}
    
                {/* <!-- Start of lower part: List --> */}
                <div className="row">
                    {/* <!-- Start of main column --> */}
                    <div className="col mt-4 main-column">
                        {/* <!-- Start of the list --> */}
                        <ul className="list-group list-group-flush w-100">
                            
                            {/* <!-- Task Item(s) --> */}
                        {props.allTasks.map(task => <li className="list-group-item"><Task title={task.title}/></li>)}

        

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
>>>>>>> 29d5e1c29a2bf63564040e228f37b1109589958b
}