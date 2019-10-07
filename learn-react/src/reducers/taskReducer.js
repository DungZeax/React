const defaultState = {
    tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    labelTask: '',
}

const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TASK': {

            const { detail } = action;
            const { tasks } = state;
            return {
                ...state,
                tasks: [...tasks, detail],
            }
        }

        case 'CHANGE_TASK': {
            const { detail } = action;
            return {
                ...state,
                labelTask: detail,
            }
        }

        default:
            return state;
    }
}

export default taskReducer;
