import React from 'react';

function TaskFormToggle({handleToggleForm}) {
    return (
        <a 
            href="#"
            id="addTask"
            className='d-none d-lg-flex'
            onClick={handleToggleForm}
            style={{zIndex: 999999}}
        >    
            <svg id="addBtn" width="26" height="26" viewBox="0 0 26 26" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M11.3775 0.569824H15.0926V11.2929H25.7312V15.008H15.0926V25.7311H11.3775V15.008H0.56991V11.2929H11.3775V0.569824Z"
                    fill="#70bbae" />
            </svg>

            
        </a>
    );
}

export default TaskFormToggle;