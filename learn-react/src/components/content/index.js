import React from 'react';
import './content.css';
import InputTag from '../input-task';
import Task from '../task';

class Content extends React.Component {
    state = {
        tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
        labelTask: '',
        statusBtn: 'save',
        taskEdit: '',
    }

    onAddTask = () => {
        const tasks = this.state.tasks;
        const labelTask = this.state.labelTask;
        const newTasks = [...tasks, labelTask];
        this.setState({
            tasks: newTasks
        })
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
        return this.state.tasks.map((task, index) => {
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
                    labelTask={this.state.labelTask} 
                    onAddTask={this.onAddTask} 
                    onChangeTask={this.onChangeTask} 
                />
                {
                    this.renderTask()
                }
            </div>
        )
    }
}

export default Content;