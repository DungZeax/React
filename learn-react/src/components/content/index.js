import React from 'react';
import './content.css';
import InputTag from '../input-task';
import Task from '../task';
import { connect } from 'react-redux';

class Content extends React.Component {
    state = {
        labelTask: '',
        statusBtn: 'save',
        taskEdit: '',
    }



    onChangeTask = (val) => {
        this.setState({ labelTask: val})
    }

    onDeleteTag = (index) => {
        const tasks = this.state.tasks;
        tasks.splice(index, 1);
        this.setState({
            tasks: tasks
        })
    }

    onEditTask = (index) => {
        this.setState({ labelTask: this.state.tasks[index], statusBtn: 'edit', taskEdit: index})
    }

    editTask = () => {
        const { tasks, taskEdit, labelTask } = this.state;
        tasks[taskEdit] = labelTask
        this.setState({
            tasks: tasks
        })
    }
 
    renderTask = () => {
        return this.props.tasks.map((task, index) => {
            return <Task onDeleteTag={() => this.onDeleteTag(index)} onEditTask={() => this.onEditTask(index)}>{task}</Task>
        })
    }

    render() {
        return(
            <div className='container'>
                <h1>Task</h1>
                <InputTag
                    editTask={this.editTask}
                    statusBtn={this.state.statusBtn}
                />
                {
                    this.renderTask()
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { taskReducer } = state;
    const { tasks } = taskReducer;
    return {
        tasks
    }
}

export default connect(mapStateToProps)(Content);