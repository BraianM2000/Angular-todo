import { createAction,props } from "@ngrx/store";
import { Todos } from "./todos.state";

const addTodoAction = createAction("[TODO] ADD_TODO", props<Todos>())
const deleteTodoAction = createAction("[TODO] DELETE_TODO", props<Todos>())

export const actions = {addTodoAction,deleteTodoAction}