import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoSelector } from 'src/state/todo.selectors';
import { actions } from 'src/state/todos.actions';
import { Todos } from 'src/state/todos.state';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  newTodo!: string
  todos!:Todos[]
  constructor(private store:Store){
    this.store.select(todoSelector).subscribe(state=>this.todos=state)
  }

  addTodo(){
    if(this.newTodo){
      this.store.dispatch(actions.addTodoAction(
        {
          id:this.todos.length>0?this.todos.length+1:1,
          title:this.newTodo
        }
      ))
    }
    
  }
}
