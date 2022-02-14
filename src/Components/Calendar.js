import React, { useState } from "react";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";

const containerStyle = {
    height: "90vh",
    width: "100%",
    padding: 0,
    minHeight: 850,
    position: 'relative',
    paddingLeft: '5rem',
    paddingRight: '5rem',

    // background: 'white'
}

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: "2022-02-18",
        end: "2022-02-18"
    }
];



export function Scheduler({ allTasks }) {
    const [schedule, setSchedule] = useState([]);
    


    useEffect(() => {
        // console.log('allTasks' + allTasks)
        // console.log('Array' + Object.keys(allTasks))
        const tasksContainer = [];
        Object.keys(allTasks).map(task => {
            // console.log(task)
            // console.log(allTasks[task].title)
            // const taskData = allTasks[task]
            tasksContainer.push(
                {
                    title: allTasks[task].title,
                    allDay: true,
                    start: allTasks[task].date,
                    end: allTasks[task].date
                }
                )
                // console.log(tasksContainer)
                setSchedule(tasksContainer)
            }
            // setSchedule(prev => prev.concat
            // )  
            )
        return;
    }, [allTasks])
    
    return(
        
        <div style={containerStyle} className="pt-3 pb-5" id="scheduler">

            <div style={{background: 'white',     borderRadius: 19,}} id="calendar" className=' pt-5 h-100'>

        <h2 className="ms-5 mb-4">Scheduler</h2>
        <div className="calendar px-5">
             <Calendar 
             localizer={localizer} 
             events={schedule} 
             startAccessor='start' 
             endAccessor="end" 
             style={{ height: 650 }} />
        </div>
             </div>
        </div>
    )
}