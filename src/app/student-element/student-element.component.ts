import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";

@Component({
  selector: 'app-student-element',
  templateUrl: './student-element.component.html',
  styleUrls: ['./student-element.component.scss']
})
export class StudentElementComponent implements OnInit {
  @Input() student!: IStudent;
  @Output() onStudentRemove: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteStudent() {
     this.onStudentRemove.emit(this.student.id)
  }
}
