import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  newTodo: string = '';

  selectedTodo: Todo | null = null; // For editing

  constructor() { }

  ngOnInit(): void {
  }


}


interface Todo {
  text: string;
  editing: boolean;
}
