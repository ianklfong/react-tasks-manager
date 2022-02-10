import React, { useEffect, useState } from 'react';


import $ from 'jquery';

import styled from 'styled-components';
import AllTasksList from './AllTasksList';
import EmptyProgress from './EmptyProgress';
import EmptyList from './EmptyList';


//import Searcg bar component
import SearchBar from './SearchBar.jsx';
import Progresses from './Progresses';
import TasksNumber from './TasksNumber';
import TodayTasks from './TodayTasks';


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};



const Container = styled.div`
    height: 100vh; 
    maxHeight: 100vh; 
    width: 100%;
    padding: 0;
    min-height: 850px;
    position: relative;
`

const LeftColumn = styled.div`
    padding-top: 3rem;
    overflow: hidden;
    max-height: 100%;
    flex-direction: column;
`

const OverviewBox = styled.div`
    width: 30%;
    padding-top: clamp(100px, 30%, 200px);
    border-radius: 8px;
    // background: white;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    // background: linear-gradient(181.05deg, rgba(255, 255, 255, 0.219) -12.37%, rgba(163, 179, 156, 0.291) 110.03%);
    // background: linear-gradient(181.05deg, rgba(149, 152, 155, 0.5) 19.66%, rgba(125, 125, 125, 0.5) 110.04%, rgba(246, 247, 248, 0.43) 110.05%);
    background: linear-gradient(181.05deg, rgba(217, 219, 221, 0.5) 13.36%, rgba(161, 161, 161, 0.5) 110.04%);
`

let OverviewText = styled.div`
    text-align: center;
    transform: translate(-50%, -50%); 
    top: 50%;
    left:50%;
    position: absolute; 
    // transition: 1s;
`
const flexFont = {
    textAlign: 'center',
    // transform: translate(-50%, -50%),
    top: '50%',
    left:'50%',
    position: 'absolute',
    // fontSize: '1.5vw',
}

//current date elements
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const d = new Date();
let date = d.getDate();
let day = weekday[d.getDay()];

function Overview({lists, onDragEnd, allTasks, handleRemoveDone, handleEditTask, handleToggleDone, handleRemoveTask, listOrder, searchItems, searchInput, searchResults, handleSearchInput, sidebar, taskForm, handleEditListTitle }) {
    
    const [fontSize, setFontSize] = useState(4);

    useEffect(() => {
        // if both sidebar & task form are collapsed
        if(sidebar === false && taskForm === false) {
            // set the font size as 2.5
            setFontSize(4.2)
            // console.log(fontSize)

            return;
        }
        // if any one of sidebar & task form is active
        if((sidebar === true && taskForm === false )|| (sidebar === false && taskForm === true)) {
            // set the font size as 1.5
            setFontSize(3.2);
            return;
        }
        // if both are active
        if(sidebar ===true && taskForm === true) {
            // set the font size as 1
            setFontSize(2.5);
            return;
        }

    }, 
    // trigger everytime sidebar / task form change
    [sidebar, taskForm])

    const [todo, setTodo] = useState(0)

    const [today, setToday] = useState(0)

    useEffect(() => {
        const todayTasks = lists['all-tasks'].taskIds.slice().filter(task => allTasks[task].date === '2022-02-11').length
        setToday(todayTasks)

    }, [allTasks])

    useEffect(() => {
        const doneTasks = lists['all-tasks'].taskIds.slice().filter(task => allTasks[task].done === false).length
        setTodo(doneTasks)

    }, [allTasks])


            

    return (
        <Container className='col-12' id="Home">
            <div className="row h-100">
                {/* Start of left column */}
                <LeftColumn className="col-5 pt-4 d-none d-md-flex">

                    {/* start of Overview part */}
                    <div className="row mx-4" style={{height: "10%"}}>
                        {/* Overview part title */}
                        <h3 className="my-auto">OVERVIEW</h3>
                    </div>
                    {/* Overview part body */}
                    <div 
                        className="row mx-4 h-auto"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                        >       
                                <OverviewBox>
                                    {/* date */}
                                    <OverviewText
                                    // style={flexFont}
                                    style={{fontSize: `${fontSize}vw`}}
                                    >
                                      <p className="overview-text" style={{fontSize: `${fontSize/ 3}vw`, transition: '1s'}}>{day}</p>
                                      <p className="overview-num" style={{lineHeight: 1, transition: '1s'}}>{date}</p>
                                      <p className="overview-text" style={{fontSize: `${fontSize/ 3}vw`, transition: '1s'}}>FEB</p>
                                    </OverviewText>
                                </OverviewBox>

                                <OverviewBox>
                                    {/* weekday */}
                                    <OverviewText >
                                        {todo === 0 ?
                                            <p 
                                                className="overview-text" 
                                                style={{
                                                    fontSize: `${fontSize/ 3}vw`, 
                                                    transition: '1s'
                                                }}
                                            >
                                                You've&nbsp;
                                                    <i
                                                        className="fas fa-check"
                                                        style={{
                                                            color: '#70bbae',
                                                        }}
                                                    >
                                                </i>
                                             <br/>
                                            every task<br/>🎉</p>
                                        :
                                            <TasksNumber todo={todo} fontSize={fontSize}/>
                                        }
                                    </OverviewText>
                                </OverviewBox>

                                <OverviewBox>
                                    {/* tasks left */}
                                    <OverviewText >
                                    {today === 0 ?
                                        <p style={{fontSize: `${fontSize/ 3}vw`, transition: '1s'}}>Wooo !!<br/>No task <br/>today</p>

                                        :
                                        <TodayTasks today={today} fontSize={fontSize}/>

                                      }
                                    </OverviewText>
                                </OverviewBox>
                    </div>
                    {/* end of Overview part */}

                    {/* start of lower part: pinned list */}
                    
                    {/* start of progress part */}
                    <div 
                        className="row mx-4"
                        style={{height: "10%"}}
                    >
                        {/* progress part title div */}
                        <div 
                            style={{
                                display: "flex",
                                alignContent: "center"
                            }}
                        >
                                    {/* icon */}
                                    <svg  className="my-auto nav-icon2" width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9168 0V2.9334C22.2981 3.71758 26.8188 9.51177 26.0339 15.8868C25.3652 21.1728 21.2079 25.3696 15.9168 25.994V28.8983C23.9116 28.0997 29.726 21.013 28.9265 13.026C28.2724 6.12819 22.7923 0.682524 15.9168 0V0ZM13.0097 0.0435653C10.1752 0.319479 7.47147 1.40861 5.26201 3.23836L7.34065 5.38758C8.96867 4.08062 10.931 3.23836 13.0097 2.94792V0.0435653V0.0435653ZM3.21244 5.28593C1.39495 7.48938 0.276476 10.1843 0 13.026H2.90719C3.18337 10.9639 3.99738 9.00351 5.29108 7.36254L3.21244 5.28593ZM19.5508 9.39559L12.4573 16.4822L9.37568 13.4036L7.83487 14.9429L12.4573 19.5608L21.0916 10.9349L19.5508 9.39559ZM0.0145359 15.9304C0.305255 18.7767 1.42452 21.4632 3.22698 23.6705L5.29108 21.5939C4.00746 19.9523 3.18912 17.9963 2.92172 15.9304H0.0145359V15.9304ZM7.34065 23.7286L5.26201 25.7181C7.46388 27.5517 10.1596 28.6936 13.0097 29V26.0956C10.9418 25.8285 8.9838 25.011 7.34065 23.7286V23.7286Z" fill="black"/>
                                    </svg>

                                    {/* text */}
                                    <h3 className="ms-3 my-auto">PROGRESS</h3>
                        </div>
                    </div>

                    {/* progress part body */}
                    <div
                        className="pb-5 mx-4"
                        style={{
                            height: "60%",
                            flexGrow: 1
                            }}
                    >   

                        <div className="w-100 pinned-list px-3 pt-4" style={{height: "100%"}}>

                            
                            {/* start of list container */}
                            <div className="row h-100" style={{overflow: "scroll"}}>
                                <div className="col-12 w-100" style={{position: 'relative'}}>
                                    
                                    {Object.keys(allTasks).length === 0 ?
                                        <EmptyProgress />   
                                        :
                                        // <></>
                                        <Progresses allTasks={allTasks} listOrder={listOrder} lists={lists} handleEditListTitle={handleEditListTitle} />
                                    }

                                        {/* list progress bar component */}
                                </div>
                            </div>
                            {/* end of list container */}
                        </div>
                    </div>
                    {/* end of progress part */}
               

                </LeftColumn>
                {/* End of left column */}


                {/* Start of right column */}
                <div className="right-column col-md-7 pb-md-5 pt-4 ps-md-4 pe-md-5">

                        {/* start of title row*/}
                        <div className="row mx-4" style={{height: "10%"}}>
                                <h3 className="my-auto ">ALL TASKS</h3>
                        </div>
                        {/* end of title row*/}
                        
                    <div className="mx-md-3 all-tasks" style={{height: "90%", position: 'relative'}}>
                        
                        {lists['all-tasks'].taskIds.length === 0 ? 
                            <EmptyList />
                        : 
                        <>
                            <div className="row py-4 px-5" style={{height: "10%"}}>

                            <SearchBar className="mx-5" searchItems={searchItems} searchInput={searchInput} handleSearchInput={handleSearchInput} />

                            </div>
                            {/* start of function row */}
                            <div className="row px-5" style={{height: "10%"}}>
                                <div className="col my-auto text-end">
                                    <a className="removeDone" href="#" style={{fontSize: 20}}
                                        onClick={handleRemoveDone}
                                    >
                                        Remove done
                                    </a>
                                </div>
                            </div>
                            {/* end of function row */}

                            <AllTasksList
                                allTasks={allTasks}
                                lists={lists}
                                onDragEnd={onDragEnd} 
                                handleEditTask={handleEditTask}
                                handleToggleDone={handleToggleDone}
                                handleRemoveTask={handleRemoveTask}
                                searchResults={searchResults}
                                searchInput={searchInput}
                                searchItems={searchItems}
                            />
                        </>
}


                    </div>

                </div>
                {/* End of right column */}









            </div>
        </Container>
    );
}

export default Overview;