import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    height: 20px;
    background: lightgrey;
    border-radius: 12px;
    overflow: hidden;
`

const Progress = styled.div`
    transition: 0.8s ease-out;
    width: 0;
    background: linear-gradient(270deg, #A5D9B7 -12.42%, #70bbae 31.44%);
    height: 100%;
    display: flex;
    align-items: center;
    align-contents: center;
`


export default function ProgressBar ({ allTasks, list }){


    const [percentage, setPercentage] = useState(0)

    
    useEffect(() => {
        const all = list.taskIds.length

        if(all === 0 ){
            setPercentage(0)
            return;
        }
        const doneTasks = list.taskIds.slice().filter(task => allTasks[task].done === true).length

        setPercentage(Math.floor(doneTasks / all * 100))


    }, [allTasks, list])

        
    return(
        <div className='mb-3'>
            <h4 className='mb-3 ms-2'>{list.title}</h4>
            <div style={{position: 'relative', display: 'flex', height: 25}}>
            {list.taskIds.length === 0 ?
                <p className='ms-2' style={{fontWeight: 200}}>No task assigned</p>
                :
                <Bar className="col-12">
                    <Progress style={
                        {
                            opacity: 1,
                            width: `${percentage}%`,
                            borderRadius: 12,
                        }
                    }>
                        <p className='text-center w-100' style={{fontSize: 15, lineHeight: 0, color: 'white'}}> {percentage}%</p>
                    </Progress>
                </Bar>
            }
            </div>
        </div>

    )

}