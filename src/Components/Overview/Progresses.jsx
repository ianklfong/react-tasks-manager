import React from 'react';

import ProgressBar from './ProgressBar';


export default function Progresses ({ allTasks, lists, listOrder}){

    // const totalLists = Object.keys(lists);

    return(
        <>
            {listOrder.map(list => 
            <ProgressBar allTasks={allTasks} listOrder={listOrder} list={lists[list]}/>
                )}
        </>
    )

}