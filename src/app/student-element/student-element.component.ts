import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";

@Component({
  selector: 'app-student-element',
  templateUrl: './student-element.component.html',
  styleUrls: ['./student-element.component.scss']
})
export class StudentElementComponent implements OnInit {
  @Input() student!: IStudent;

  constructor() {
  }

  ngOnInit(): void {
  }

}
