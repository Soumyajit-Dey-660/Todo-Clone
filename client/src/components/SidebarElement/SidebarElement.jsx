import React from 'react';
import PropTypes from 'prop-types';
import './sidebarElement.style.css';

const SidebarElement = ({ icon, text, noOfTasks }) => {
    return (
        <div className="sidebar-element">
            <div className="element-details">
                <div className="element-icon">{icon}</div>
                <h4
                    className="element-description"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
            <span className="total-tasks">{noOfTasks}</span>
        </div>
    );
};

export default SidebarElement;

SidebarElement.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    noOfTasks: PropTypes.string
};

SidebarElement.defaultProps = {
    noOfTasks: ''
};
