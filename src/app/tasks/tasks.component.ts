import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [
    {
      title: 'string',
      description: 'string',
      date: 'string',
      time: 'string',
      priority_level: 'string',
      category: 'string',
      progress_level: 'string',
    },
  ];
}
