import React, { Fragment } from 'react';
import './textbox.css';

class Textbox extends React.Component {

    onChangeTask = (event) => {
        const value = event.target.value;
        this.props.onChangeTask(value)
    }

    onAddTask2 = () => {
        this.props.onAddTask();
    }

    editTask = () => {
        this.props.editTask();
    }

    renderBtn = () => {
        const statusBtn = this.props.statusBtn;
        if (statusBtn === 'save') {
            return <button className='save' onClick={this.onAddTask2}>Add Task</button>
        }
        return <button className='edit' onClick={this.editTask}>Edit Task</button>
    }

    render() {
        return (
            <Fragment>
                <input
                    className='tb' 
                    type='text' 
                    placeholder="Task" 
                    value={this.props.labelTask}
                    onChange={this.onChangeTask}
                />
                {this.renderBtn()}        
            </Fragment>
        )
    }

}

export default Textbox;