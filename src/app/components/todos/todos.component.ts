import { Component, OnInit } from '@angular/core';
import { Todo } from './../../Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo!:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todo = [
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

}
