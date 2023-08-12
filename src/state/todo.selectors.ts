import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todos } from "./todos.state";

export const todoSelector = createSelector(createFeatureSelector("todos"),
(state:Todos[])=>state
) 