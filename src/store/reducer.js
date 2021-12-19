import { set_todo_input, add_input_value,delete_input_value, edit_input_value } from "./constants";
const iniState = {
    todos: [],
    todoInput:'',
};
function reducer(state, action) {
    switch(action.type){
        case set_todo_input:
            return {
                ...state,
                todoInput: action.payload
            }
        case  add_input_value:
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }
            case delete_input_value:

                    let newJobs = [...state.todos]
                    newJobs.splice(action.payload, 1)
                    return {
                        ...state,
                        todos: newJobs
                    }
            case edit_input_value:
                let editJobs = [...state.todos]
                editJobs[action.index] = state.todoInput
                return {
                    ...state,
                    todos: editJobs
                }

        default: throw new Error ('Invalid values')     
    }
    
}
export { iniState }
export default reducer