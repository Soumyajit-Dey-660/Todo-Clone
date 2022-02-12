import React from 'react';
import './sidebar.style.css';
import SidebarElement from '../SidebarElement/SidebarElement';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="app-name ">To Do List</div>
            <div className="profile-info">
                <img src="" alt="" />
                <span>My Name</span>
            </div>
            <div className="quick-nav">
                <SidebarElement
                    icon={
                        <>
                            <i className="fas fa-sun" />
                        </>
                    }
                    text="My Day"
                    noOfTasks="0"
                />
                <SidebarElement
                    icon={
                        <>
                            <i className="fa fa-star" />
                        </>
                    }
                    text="Important"
                    noOfTasks="0"
                />
                <SidebarElement
                    icon={
                        <>
                            <i className="fas fa-tasks" />
                        </>
                    }
                    text="Tasks"
                    noOfTasks="0"
                />
            </div>
            <hr />
            <div className="list-nav">
                <SidebarElement
                    icon={
                        <>
                            <i
                                className="fas fa-plus new-list"
                                style={{ color: '#4543bf' }}
                            />
                        </>
                    }
                    text="<span style=color:#4543bf>New List</span>"
                />
            </div>
        </div>
    );
};

export default Sidebar;
