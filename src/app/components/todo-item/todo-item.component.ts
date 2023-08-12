import { Component, Input } from '@angular/core';
import { Todos } from 'src/state/todos.state';
import {Store} from "@ngrx/store"
import { actions } from 'src/state/todos.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() todo!: Todos

constructor (private store:Store){}

deleteTodo(){
  this.store.dispatch(actions.deleteTodoAction(this.todo))
}

}
