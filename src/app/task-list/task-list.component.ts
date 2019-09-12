import { Component, OnInit } from '@angular/core';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: TaskListItemComponent[];

  constructor(private taskProvider: TaskServiceService) { }

  ngOnInit() {
    this.tasks = this.taskProvider.getTasks();
  }

}
