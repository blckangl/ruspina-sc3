import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";
import {Router} from "@angular/router";
import {StudentsService} from "../students.service";

@Component({
  selector: 'app-student-element',
  templateUrl: './student-element.component.html',
  styleUrls: ['./student-element.component.scss']
})
export class StudentElementComponent implements OnInit {
  @Input() student!: IStudent;

  constructor(private router: Router, private studentsService: StudentsService) {
  }

  ngOnInit(): void {

    console.log("from student element", this.studentsService.studentList);
  }

  deleteStudent() {
    console.log("student deleted with id ", this.student.id)
    this.studentsService.removeStudent(this.student)
  }

  goToDetails() {
    this.router.navigate(['detail', this.student.id])
  }
}
