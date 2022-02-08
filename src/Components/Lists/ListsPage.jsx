import React from 'react';

import ColumnsSlider from './ColumnsSlider'

function ListsPage({ lists, listOrder, onDragEnd, allTasks, handleAddList, handleEditListTitle, handleDeleteList }) {
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
                
                {/* <SearchBar />   */}
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
            }}
        >
            <div 
                className="col w-100"
                style={{overflow: "hidden"}}
            >

                <ColumnsSlider
                    lists={lists}
                    listOrder={listOrder}
                    onDragEnd={onDragEnd}
                    allTasks={allTasks}
                    handleAddList={handleAddList}
                    handleEditListTitle={handleEditListTitle}
                    handleDeleteList={handleDeleteList}
                />
                {/* overflow scroll X */}


            </div>









        </div>
    </div>

    );
}

export default ListsPage;