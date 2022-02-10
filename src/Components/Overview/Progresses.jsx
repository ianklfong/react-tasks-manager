import React from 'react';

import ProgressBar from './ProgressBar';


export default function Progresses ({ allTasks, lists, listOrder, handleEditListTitle}){

    // const totalLists = Object.keys(lists);

    return(
        <>
            {listOrder.map((list, index) => 
            <ProgressBar allTasks={allTasks} listOrder={listOrder} list={lists[list]} key={index} handleEditListTitle={handleEditListTitle}/>
                )}
        </>
    )

}