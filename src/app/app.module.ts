import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { todoReducer } from 'src/state/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TodoItemComponent,
    TodoListComponent,
   
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      "todos":todoReducer
    }),
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
