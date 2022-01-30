import React from 'react';

import SearchBar from './SearchBar';


function ListsPage() {
    return (
        <div 
            className="col-12"
            style={{height: "100vh",
                    width: "100%",
                    padding: 0,
                    minHeight: 850
            }} 
            id="Lists"
        >

        <div 
            className="row pb-5"
            style={{paddingTop: "5.5rem"}}
        >
            <div className="col-6 col-md-8 col-lg-10 me-auto ps-3">
                
                {/* <SearchBar />                 */}
                <div
                    className="mx-5 px-3"
                    style={{
                            background: "white",
                            borderRadius: 19,
                            display: "flex"
                        }}>
                    <img className="d-inline-blcok mx-3 search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                    <input
                        className="search bg-0" type="text" placeholder="search" style={{borderRadius: 19,border: 0, height: 40, display: "inline-flex", flexGrow: 1, zIndex: 99999}}/>
                </div>

            </div>
            <div className="col-2">

            </div>
        </div>

        <div 
            className="row"
            style={{
                height: "80%",
                overflow: "hidden",
            }}>
            <div 
                className="col w-100"
                style={{overflow: "hidden"}}
            >


                {/* overflow scroll X */}
                <div className="slider w-100 h-100">

                    {/* task lists contatiner */}
                    <div className="slider-inner pt-md-4 ps-4">


                        {/* start of task List */}
                        <div 
                            className="pt-md-5 me-3"
                            style={{
                                width: 315,
                                display: "inline-block"
                            }}
                        >
                            {/* Task list Title */}
                            <h3>PROJECT</h3>

                            {/* Task list Container */}
                            <div 
                                className="w-100 task-list"
                                style={{ 
                                    borderRadius: 2,
                                    flexDirection: "column",
                                    display: "flex",
                                    borderRadius: 3
                                }}
                            >

                                {/* list Draggable handle */}
                                <div style={{
                                        padding: 24,
                                        position: "relative"
                                    }}
                                >
                                    {/* remove list icon */}
                                    <svg style={{position: "absolute", right: 15, top: 15}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.6875 11.25H16.3125C16.4156 11.25 16.5 11.3344 16.5 11.4375V12.5625C16.5 12.6656 16.4156 12.75 16.3125 12.75H7.6875C7.58437 12.75 7.5 12.6656 7.5 12.5625V11.4375C7.5 11.3344 7.58437 11.25 7.6875 11.25Z" fill="#70bbae"/>
                                        <path d="M12 1.5C17.7984 1.5 22.5 6.20156 22.5 12C22.5 17.7984 17.7984 22.5 12 22.5C6.20156 22.5 1.5 17.7984 1.5 12C1.5 6.20156 6.20156 1.5 12 1.5ZM12 20.7188C16.8141 20.7188 20.7188 16.8141 20.7188 12C20.7188 7.18594 16.8141 3.28125 12 3.28125C7.18594 3.28125 3.28125 7.18594 3.28125 12C3.28125 16.8141 7.18594 20.7188 12 20.7188Z" fill="#70bbae"/>
                                    </svg>
                                 
                                </div>

                                {/* Task */}
                                <div style={{
                                        padding: 8,
                                        transition: "background 0.2 ease",     
                                        flexGrow: 0,
                                        minHeight: 100,
                                        borderBottomLeftRadius: 3,
                                        borderBottomRightRadius: 3
                                    }}
                                >

                            {/* start of task item */}
                            <div    
                                className=" task-item accordion-item px-2" 
                                style={{
                                    borderRadius: 2,
                                    marginBottom: 8 
                                }}
                            >

                                {/* start of upper row */}
                                <div className="row">

                                    {/* Done icon */}
                                    <div className="col-1">
                                        <i className="fas fa-check d-block mb-auto mt-1" style={{fontSize: 16}}></i>
                                    </div>

                                    {/* Event title */}
                                    <div className="col-9">
                                        <p style={{fontSize: 16}}
                                             type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            FEED THE CATS
                                        </p>
                                    </div>

                                    {/* Edit icon */}
                                    <button className="col-1 my-auto">
                                        <svg className="d-block ms-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{lineHeight: 0, fontSize: 16}}>
                                            <path d="M15.0534 3.69778L12.4445 1.07556C12.2721 0.904029 12.0388 0.807739 11.7956 0.807739C11.5524 0.807739 11.3191 0.904029 11.1467 1.07556L1.8978 10.3111L1.05336 13.9556C1.02423 14.0888 1.02523 14.2268 1.05628 14.3596C1.08734 14.4924 1.14766 14.6166 1.23285 14.7231C1.31804 14.8296 1.42595 14.9157 1.54868 14.9751C1.67141 15.0346 1.80588 15.0658 1.94225 15.0667C2.00579 15.0731 2.06982 15.0731 2.13336 15.0667L5.8178 14.2222L15.0534 4.99556C15.2249 4.82316 15.3212 4.58986 15.3212 4.34667C15.3212 4.10347 15.2249 3.87018 15.0534 3.69778V3.69778ZM5.37336 13.4222L1.92003 14.1467L2.70669 10.76L9.62669 3.86667L12.2934 6.53333L5.37336 13.4222ZM12.8889 5.88889L10.2222 3.22222L11.7689 1.68444L14.3911 4.35111L12.8889 5.88889Z" fill="black"/>
                                        </svg>                     
                                    </button>

                                    {/* Drop down button */}
                                    <button className="col-1 my-auto">
                                        <svg className="d-block ms-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{lineHeight: 0, fontSize: 16}}>
                                            <path d="M5.125 7.5H10.875C10.9438 7.5 11 7.55625 11 7.625V8.375C11 8.44375 10.9438 8.5 10.875 8.5H5.125C5.05625 8.5 5 8.44375 5 8.375V7.625C5 7.55625 5.05625 7.5 5.125 7.5Z" fill="black"/>
                                            <path d="M8 1C11.8656 1 15 4.13438 15 8C15 11.8656 11.8656 15 8 15C4.13438 15 1 11.8656 1 8C1 4.13438 4.13438 1 8 1ZM8 13.8125C11.2094 13.8125 13.8125 11.2094 13.8125 8C13.8125 4.79063 11.2094 2.1875 8 2.1875C4.79063 2.1875 2.1875 4.79063 2.1875 8C2.1875 11.2094 4.79063 13.8125 8 13.8125Z" fill="black"/>
                                        </svg>
                         
                                    </button>
                                    
                                </div>
                                {/* end of upper row */}

                                {/* start of lower row */}
                                <div className="row" style={{alignItems: "center"}}>

                                    {/* pirority icon */}
                                    <div className="col-1">
                                        <div className="me-auto ms-1"
                                            style={{
                                                borderRadius: "50%",
                                                height: 8,
                                                width: 8,
                                                background: "#C05757"
                                            }}
                                        >
                                        </div>
                                    </div>

                                    {/* date & time */}
                                    <div className="col">
                                        <p className="text-secondary" style={{fontSize: 12}}>
                                            7:00am ‧ Home
                                        </p>
                                    </div>
                                </div>
                                {/* end of lower row */}

                                {/* drop down notes */}
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p style={{fontSize: 12}}>Notes</p>
                                    </div>
                                </div>
                            </div>
                            {/* end of task item */}
                                </div>
                        </div>
                        {/* end of task list */}


                        </div>
                        {/* end of task list */}







                        {/* add list button */}
                        <div className="pt-5 me-3" style={{width: 315, display: "inline-block"}}>
                            {/* Task list Title */}

                            {/* button body */}
                            <div    className="w-100" 
                                    style={{background: "rgba(43, 43, 43, 0.377)",
                                            borderRadius: 2,
                                            flexDirection: "column",
                                            display: "flex",
                                            borderRadius: 3,
                                            marginTop: 35.59
                                            }}
                            >

                                {/* list Draggable handle */}
                                <div style={{width: "100%", height: 48, position: "relative"}}>
                                    <button className="w-100 btn bg-0 h-100" style={{color: "white", position: "absolute", top: 0}}>+ NEW LIST</button>
                                </div>

                             
                            </div>
                            {/* end of task list */}


                        </div>


                        </div>




                </div>

            </div>









        </div>
    </div>

    );
}

export default ListsPage;