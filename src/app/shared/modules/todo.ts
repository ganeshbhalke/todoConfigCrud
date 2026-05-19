// import { Injectable } from "@angular/core";



// Injectable({
//     providedIn:'root'
// })
export interface ITodo{
       todoItem: string;
    todoId: string;
    isComplated: boolean;
}

export interface Ires {
    msg: string;
    data: ITodo;
}