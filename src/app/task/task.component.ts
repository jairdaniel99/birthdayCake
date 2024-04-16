import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // ! means that the value can be null or undefined so angular can ignore the null-check
  @Input() task!: Task;
  constructor() {}
}
