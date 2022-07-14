import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!:Todo[];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false
      },
      {
        content: 'second todo',
        completed: true
      }
    ]
  }

  toggleCopletion (id:number):void {
    this.todos[id].completed = !this.todos[id].completed;
  }

  removeTodo (id:number):void {
    this.todos.splice(id,1);
  }

}
