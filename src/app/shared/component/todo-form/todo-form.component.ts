import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoServices } from '../../Service/Services';
import { ITodo } from '../../modules/todo';
import { SnackBarService } from '../../Service/snack-bar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {


  @ViewChild('todoForm')todoForm!:NgForm
  isInEditMode:boolean=false
  constructor(
        private _todoService : TodoServices,
        private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }



  onTodoSubmit(todoForm:NgForm){
    if(this.todoForm.valid){
let  New_Todo:ITodo={...this.todoForm.value,todoId:Date.now().toString()} 
// New_Todo.todoId=Date.now().toString()
console.log(New_Todo);
this.todoForm.reset()

this._todoService.addTodo(New_Todo)
    .subscribe({
      next:data=>{
        console.log(data);
        this._snackBar.openSnackBar(data.msg)
        
      },
       error:err=>{
        console.log(err);
        
       }

    })
   

    }
    

  }
}
