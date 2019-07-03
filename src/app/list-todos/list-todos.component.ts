import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){};
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: string;

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.refreshTodo();
  }

  refreshTodo(){
    this.todoService.retrieveAllTodos('benkinmat').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id){
    // console.log(`delete id: ${id}`);
    this.todoService.deleteTodo('benkinmat', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodo();
      }
    )
  }

}
