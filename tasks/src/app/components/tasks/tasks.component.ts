import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskServiceService } from 'src/app/services/task-service.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
  deleteTask(task: Task) {
    this.taskService.deleteTasks(task).subscribe(() => {
      this.tasks = this.tasks.filter(elem => elem.id !== task.id);
    });
  }
  changeStatus(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.changeStatus(task).subscribe();
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(task => this.tasks.push(task));
  }
}
