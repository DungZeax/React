import React, { Fragment } from 'react';
import './textbox.css';
import { connect } from 'react-redux';

class Textbox extends React.Component {

    onChangeTask = (event) => {
        const value = event.target.value;
        this.props.onChangeTask(value)
    }

    onAddTask2 = () => {
        this.props.onAddTask(this.props.labelTask);
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

const mapStateToProps = ({ taskReducer }) => {
    const { labelTask } = taskReducer;
    return {
        labelTask
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        onAddTask: (detail) => {
            dispatch({
                type: 'ADD_TASK',
                detail,
            })
        },
        onChangeTask: (detail) => {
            dispatch({
                type: 'CHANGE_TASK',
                detail,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Textbox);