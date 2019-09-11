import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {

  @Input() name: string;
  @Input() date: string;
  @Input() assigned: string;

  constructor() { }

}
