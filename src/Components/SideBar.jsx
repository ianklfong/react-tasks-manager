import $ from 'jquery';

function SideBar({ handleDark, dark, handleSidebar }) {

    const handleCollapse = () => {
        $("#sidebar").toggleClass("collapsed");
        $(".arrow-btn").toggleClass("active");
        $('nav p').toggleClass("hidden");
        handleSidebar()
    }


    const handleTextName = dark ? 'LightMode' : 'DarkMode';

    return (
        <div className='col-auto collapsed' id="sidebar">
            <nav>
                {/* collapse/ expand toggle */}
                <div className="py-3 d-block border-bottom  d-none d-lg-block">
                    <button id="collapse" className="h-100 w-100 btn collapse-btn" onClick={handleCollapse}>
                        {/* app name */}
                        {/* <p>WELL, DONE!</p> */}
                        {/* collapse arrow */}
                        <svg style={{
                            position: "absolute",
                            right: 7,
                            top: 0
                        }} className="d-inline arrow-btn" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.8748 7.16663L12.5415 21.5L26.8748 35.8333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>
                </div>
                {/* start of menu list */}
                <ul className="mt-lg-5 list-unstyled" style={{ marginTop: '7.7rem' }}>
                    {/* Home */}
                    <li>
                        <a href="#Home">
                            {/* home icon */}
                            <svg className="nav-icon nav-icon1" width="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 20V30H4V12L16 2L28 12V30H20V20H12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <p className="ms-4 ps-3 my-auto hidden">Overview</p>
                        </a>
                    </li>

                    {/* Lists */}
                    <li>
                        <a href="#Lists">
                            {/* lists icon */}
                            <svg style={{ left: 7.5 }} className="nav-icon nav-icon2" width="28" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.2151 20.1474C45.3617 20.2937 45.4781 20.4675 45.5575 20.6588C45.6369 20.8502 45.6778 21.0553 45.6778 21.2625C45.6778 21.4696 45.6369 21.6748 45.5575 21.8661C45.4781 22.0574 45.3617 22.2312 45.2151 22.3776L39.7026 27.8901C39.4156 28.1767 39.0292 28.3415 38.6237 28.3503C38.2182 28.3591 37.825 28.2112 37.5259 27.9373L35.1634 25.7796C34.8708 25.4941 34.7006 25.1061 34.6888 24.6976C34.677 24.289 34.8245 23.8918 35.1002 23.59C35.3758 23.2882 35.758 23.1053 36.166 23.0801C36.574 23.0549 36.9758 23.1893 37.2865 23.4549L38.5371 24.5952L42.9849 20.1474C43.1312 20.0007 43.305 19.8843 43.4963 19.8049C43.6877 19.7255 43.8928 19.6846 44.1 19.6846C44.3071 19.6846 44.5122 19.7255 44.7036 19.8049C44.8949 19.8843 45.0687 20.0007 45.2151 20.1474V20.1474ZM45.2151 38.1276C45.5108 37.8322 45.6771 37.4315 45.6774 37.0136C45.6777 36.5956 45.512 36.1947 45.2166 35.8989C44.9213 35.6032 44.5206 35.4369 44.1026 35.4366C43.6847 35.4363 43.2837 35.602 42.988 35.8974L38.5371 40.3452L37.2865 39.2049C36.9758 38.9393 36.574 38.8049 36.166 38.8301C35.758 38.8553 35.3758 39.0382 35.1002 39.34C34.8245 39.6418 34.677 40.039 34.6888 40.4476C34.7006 40.8561 34.8708 41.2441 35.1634 41.5296L37.5259 43.6873C37.8248 43.9603 38.2174 44.1076 38.6221 44.0988C39.0268 44.09 39.4126 43.9257 39.6994 43.6401L45.2119 38.1276H45.2151ZM18.9 39.375C18.9 38.9572 19.0659 38.5566 19.3613 38.2613C19.6566 37.9659 20.0572 37.8 20.475 37.8H28.35C28.7677 37.8 29.1683 37.9659 29.4636 38.2613C29.759 38.5566 29.925 38.9572 29.925 39.375C29.925 39.7927 29.759 40.1933 29.4636 40.4886C29.1683 40.784 28.7677 40.95 28.35 40.95H20.475C20.0572 40.95 19.6566 40.784 19.3613 40.4886C19.0659 40.1933 18.9 39.7927 18.9 39.375ZM20.475 22.05C20.0572 22.05 19.6566 22.2159 19.3613 22.5113C19.0659 22.8066 18.9 23.2072 18.9 23.625C18.9 24.0427 19.0659 24.4433 19.3613 24.7386C19.6566 25.034 20.0572 25.2 20.475 25.2H28.35C28.7677 25.2 29.1683 25.034 29.4636 24.7386C29.759 24.4433 29.925 24.0427 29.925 23.625C29.925 23.2072 29.759 22.8066 29.4636 22.5113C29.1683 22.2159 28.7677 22.05 28.35 22.05H20.475ZM9.44995 14.175C9.44995 12.9218 9.94776 11.72 10.8339 10.8339C11.72 9.94776 12.9218 9.44995 14.175 9.44995H48.825C50.0781 9.44995 51.2799 9.94776 52.166 10.8339C53.0521 11.72 53.55 12.9218 53.55 14.175V48.825C53.55 50.0781 53.0521 51.2799 52.166 52.166C51.2799 53.0521 50.0781 53.55 48.825 53.55H14.175C12.9218 53.55 11.72 53.0521 10.8339 52.166C9.94776 51.2799 9.44995 50.0781 9.44995 48.825V14.175ZM14.175 12.6C13.7572 12.6 13.3566 12.7659 13.0613 13.0613C12.7659 13.3566 12.6 13.7572 12.6 14.175V48.825C12.6 49.2427 12.7659 49.6433 13.0613 49.9386C13.3566 50.234 13.7572 50.4 14.175 50.4H48.825C49.2427 50.4 49.6433 50.234 49.9386 49.9386C50.234 49.6433 50.4 49.2427 50.4 48.825V14.175C50.4 13.7572 50.234 13.3566 49.9386 13.0613C49.6433 12.7659 49.2427 12.6 48.825 12.6H14.175Z" fill="black" />
                            </svg>
                            <p className="ms-4 ps-3 my-auto hidden">Lists</p>
                        </a>
                    </li>
                    {/* Calendar */}
                    <li>
                        <a href="#scheduler">
                            {/* calendar icon */}
                            <svg className="nav-icon nav-icon1" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 2V6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 2V6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 10H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="ms-4 ps-3 my-auto hidden">Scheduler</p>
                        </a>
                    </li>

                </ul>

                <ul className='mt-autp' style={{position: 'absolute', bottom: 0, left: -35}}>
                    <li className="mode">
                        <a href="#">
                            {/* calendar icon */}
                            <svg onClick={handleDark} xmlns="http://www.w3.org/2000/svg"  width="24" viewBox="0 0 24 24" fill="none" className="bi bi-moon-fill nav-icon nav-icon1" viewBox="0 0 16 16">
                                <path onClick={handleDark} d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" stroke="black"/>
                            </svg>
                            <p className="ms-4 ps-3 my-auto hidden mode-text text" onClick={handleDark}>

                                {/* {handleTextName} */}
                            </p>
                        </a>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default SideBar;