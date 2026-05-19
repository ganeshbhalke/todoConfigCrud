import { Injectable } from "@angular/core";
import { Observable,of } from "rxjs";
import { Ires, ITodo } from "../modules/todo";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn:'root'
})

export class TodoServices{


    todosArr:ITodo[]= [
      {
        todoItem: 'JS',
        todoId: '123',
        isComplated:true
      },
      {
        todoItem: 'TS',
        todoId: '124',
         isComplated:false
    
      },
      {
        todoItem: 'SASS',
        todoId: '125',
         isComplated:true
      },
      {
        todoItem: 'Angular',
        todoId: '9322',
         isComplated:false
      }
    ]

constructor(
    private _http:HttpClient
){}


fetchTodo():Observable<ITodo[]>{
return of(this.todosArr)
}

// fetchTodos(){
//   return this._http.get<ITodo[]>('https://jsonplaceholder.typicode.com/posts')
// }




addTodo(todo:ITodo):Observable<Ires>{
// API Call
this.todosArr.push(todo)
let res={
  msg:`New Todo Item With Id ${todo.todoId} Added successfully!!`,
  data:todo 
}
return of(res)

}

}