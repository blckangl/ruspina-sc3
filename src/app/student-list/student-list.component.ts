import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() students!: Array<IStudent>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
