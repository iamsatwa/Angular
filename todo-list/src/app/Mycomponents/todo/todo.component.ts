import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  constructor() { 
    this.todos = [
      {sno:1, title: "Printout", desc:"100 Pages printout", active:true}, 
      {sno:2, title: " Zoom call", desc:"Client call at 11 am", active:false},
      {sno:3, title: " Lunch", desc:"Team lunch at Barbq nation", active:true},
      {sno:4, title: " Code Review", desc:"Code review with team member", active:true}
    ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

  }

}
