import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../modules/todo';
import { TodoServices } from '../../Service/Services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


todosArr!:ITodo[]
  constructor(
    private _todoService : TodoServices
  ) { }

  ngOnInit(): void {

      this.todosArr = this._todoService.todosArr

  // this._todoService.fetchTodos()
  //   .subscribe(res => {
  //     this.todosArr = res
  //     console.log(this.todosArr)
    // })

 
}

}
