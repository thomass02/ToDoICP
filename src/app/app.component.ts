import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define list of items
  title = 'To-Do List';
  todoList: any[] = [];
  todoItem = '';

  // Write code to push new item
  submitNewItem(item: string) {
    this.todoList.push({id: this.todoList.length, name: item});
  }

  // Write code to delete item
  deleteItem(id: number) {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

}
