import React, { Fragment } from 'react';
import './label.css';

function Label(props) {
    const onDeleteTag = props.onDeleteTag;
    const onEditTask = props.onEditTask;
    return (
        <Fragment>
            <div className='label'><span onClick={onEditTask}>{props.children}</span> <span className='del' onClick={onDeleteTag}>x</span></div>

        </Fragment>
    )
}

export default Label;