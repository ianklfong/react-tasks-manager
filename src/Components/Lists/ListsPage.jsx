import React, { useState, useEffect } from 'react';

import ListSlider from './ListSlider'
import EmptyList from './EmptyList';

function ListsPage({ lists, listOrder, onDragEnd, allTasks, handleAddList, handleEditListTitle, handleDeleteList, handleEditTask, handleToggleDone, handleRemoveTask }) {

    const [searchInput, setSearchInput] = useState('');




  
    const handleSearchInput = e => {
      setSearchInput(e.target.value)
    //   console.log(searchInput)
    }
    
    
    let slider = document.querySelector('.slider');
    let innerSlider = document.querySelector('.slider-inner');
    let pressed = false;
    let startx;
    let x;


    const handleOnMouseDown = (e) => {
        pressed = true;
        startx = e.nativeEvent.offsetX - innerSlider.offsetLeft;
        // document.style.cursor = 'grabbing';
    }

    const handleMouseEnter = () => {
        // slider.style.cursor = 'grab';
    }

    const handleMouseLeave = () => {
        // slider.style.cursor = 'default'
    }

    const handleMouseUp = () => {
        pressed = false;
        // slider.style.cursor = 'grab';
    }

    const handleMouseMove = e => {
        if(!pressed) return;
        e.preventDefault();
    
        x = e.nativeEvent.offsetX

    innerSlider.style.left = `${x - startx}px`;
         checkBound()
    }

    function checkBound () {
        let outer = slider.getBoundingClientRect();
        let inner = innerSlider.getBoundingClientRect();
    
        if(parseInt(innerSlider.style.left) > 0) {
            innerSlider.style.left = '0px'
        } else if (inner.right < outer.right) {
            innerSlider.style.left = `-${inner.width - outer.width}px`
        }
    }

    return (
        <div 
            className="col-12"
            style={{height: "90vh",
                    width: "100%",
                    padding: 0,
                    minHeight: 850,
                    position: 'relative'
            }} 
            id="Lists"
        >
            
        {/* slider handle */}
        <div 
            className='w-100'
            style={{height: 500, position: 'absolute', top: 0}}
            onMouseDown={handleOnMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}        
        ></div>

        <div 
            className="row pb-5"
            style={{paddingTop: "5.5rem"}}
        >
            <div className="col-lg-10 me-md-auto ps-md-3">
                
                {/* <SearchBar />   */}
                <div
                    className="mx-3 mx-sm-5 px-3 searchBar"
                    style={{
                            background: "white",
                            borderRadius: 19,
                            display: "flex"
                        }}>
                    <img className="d-inline-blcok mx-3 search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                    <input
                        id="search"
                        className="search bg-0" 
                        type="text" 
                        placeholder="search" 
                        style={{borderRadius: 19,border: 0, height: 40, display: "inline-flex", flexGrow: 1, zIndex: 99999}}
                        onChange={handleSearchInput}
                    />
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
                {listOrder.length === 0 ?
                <EmptyList handleAddList={handleAddList} />
                :
                <ListSlider
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
                    searchInput={searchInput}

                />
                }



            </div>









        </div>
    </div>

    );
}

export default ListsPage;