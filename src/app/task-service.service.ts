import { Injectable } from '@angular/core';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks: TaskListItemComponent[] = [
    {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
    {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
    {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
    {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
    {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
    {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
    {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
  ];

  constructor() { }

  public getTasks = () => this.tasks;
  public addTask = (task: TaskListItemComponent) => this.tasks.push(task);
  public removeTask = (task: TaskListItemComponent) => this.tasks = this.tasks.filter(t => t !== task);
  
}
