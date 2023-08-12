
import {createReducer,on} from "@ngrx/store"
import { todos } from "./todos.state"
import { actions } from "./todos.actions"

export const todoReducer = createReducer(
    todos,
    on(actions.addTodoAction, (state, newTodo)=>{
        return [...state, newTodo]
    }),
    on(actions.deleteTodoAction, (state, newTodo)=>{
        let todoList = state.filter((todo)=>todo.id != newTodo.id)
        return [...todoList]
    })
)

