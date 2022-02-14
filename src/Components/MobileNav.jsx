import React from 'react';
import $ from 'jquery';


export default function Components ({handleToggleForm, handleSidebar}){

    const handleClick = () => {
        $("#sidebar").toggleClass("collapsed");
        $(".arrow-btn").toggleClass("active");
        $('nav p').toggleClass("hidden");
        handleSidebar();
    }

    return(
        <div className='row d-lg-none px-3 pt-4 fixed-top' style={{alignItems: 'space-between'}}>
            <div className="col mb-3 ms-1">
                <svg type='button' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
                    <path d="M4.46875 6.90625H21.5312M4.46875 19.9062H21.5312H4.46875ZM4.46875 13.4062H21.5312H4.46875Z" stroke="#70bbae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#70bbae" />
                </svg>
            </div>


            {/* <div className="col"> */}
                {/* <Hamburger /> */}
                {/* ☰ */}
            {/* </div> */}
            <div className="col text-end">
            <svg 
                type='button'
                id="addBtnMobile" 
                width="20" 
                height="20" 
                viewBox="0 0 26 26" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleToggleForm}
            >
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M11.3775 0.569824H15.0926V11.2929H25.7312V15.008H15.0926V25.7311H11.3775V15.008H0.56991V11.2929H11.3775V0.569824Z"
                    fill="#70bbae" />
            </svg>
            </div>

        </div>

    )

}