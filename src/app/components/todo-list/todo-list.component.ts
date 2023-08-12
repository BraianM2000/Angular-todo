import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoSelector } from 'src/state/todo.selectors';
import { Todos } from 'src/state/todos.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos:Todos[]=[]

  constructor(private store:Store){}

  ngOnInit():void{
    this.loadTodos()
  }
  loadTodos(){
    this.store.select(todoSelector).subscribe((state)=>this.todos = state)
  }

}
