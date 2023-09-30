import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Tasks tracker';

  ngOnInit(): void {}
  toggleAddTask() {
    console.log('Add task');
  }
}
