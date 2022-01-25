import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() students!: Array<IStudent>;
  @Output() onStudentsChanged: EventEmitter<Array<IStudent>> = new EventEmitter<Array<IStudent>>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteStudent(id: string) {
    let newStudentsList = this.students.filter(x=>x.id!=id);

    this.onStudentsChanged.emit(newStudentsList);
    console.log("new list", newStudentsList)
  }

}
