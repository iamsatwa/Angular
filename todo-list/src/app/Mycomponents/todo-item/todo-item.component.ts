import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() CurrentTodo!:Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();  
  constructor() { 

  }
  
  ngOnInit(): void {
  }
  onClick(CurrentTodo: Todo){
    console.log("onclick button has been trigger")
    this.todoDelete.emit(CurrentTodo);
  };
  
}
