import { set_todo_input, add_input_value, delete_input_value,edit_input_value } from "./constants";
export const setToDoInput = payload => ({
    type: set_todo_input,
    payload
})
export const addTodo = payload => ({
    type: add_input_value,
    payload
})
export const deleteToDo = (payload) => ({
    type: delete_input_value,
    payload,
})
export const editToDo = (index) => ({
    type: edit_input_value,
    index
})