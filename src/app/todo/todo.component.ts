import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:string[] = [];
  todo:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    this.todos.push(this.todo);
  }

  deleteTodo(){
    this.todos.pop();
  }

  remove(index:number){
    this.todos.splice(index, 1);
  }



}
