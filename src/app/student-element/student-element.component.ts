import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-element',
  templateUrl: './student-element.component.html',
  styleUrls: ['./student-element.component.scss']
})
export class StudentElementComponent implements OnInit {
  @Input() student!: IStudent;
  @Output() onStudentRemove: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  deleteStudent() {
     this.onStudentRemove.emit(this.student.id)
  }

  goToDetails() {
    this.router.navigate(['detail',this.student.id])
  }
}
