import React, { useState } from "react";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const containerStyle = {
    height: "100vh",
    width: "100%",
    padding: 0,
    minHeight: 850,
    position: 'relative'
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
        startdate: "2022-02-18",
        end: "2022-02-18"
    }
];



export function Scheduler(allTasks) {
    const testing = Object.values(allTasks);
    console.log(testing)

    return(
        <div style={containerStyle}>

        <div className="calendar" id="scheduler" >
             <Calendar 
             localizer={localizer} 
             events={testing} 
             startAccessor='date' 
             endAccessor="end" 
             style={{ height: 500, margin: "50px" }} />
        </div>
        </div>
    )
}