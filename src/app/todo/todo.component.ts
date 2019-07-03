import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1, '', false, new Date());
    this.todoService.retrieveTodo('benkinmat', this.id).subscribe(
      result => this.todo = result
    );
  }

  saveTodo(){
    this.todoService.updateTodo('benkinmat', this.id, this.todo)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos']);
        }
      )
  }

}
