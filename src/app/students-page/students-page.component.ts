import { Component, OnInit } from '@angular/core';
import {IStudent} from "../shared/models/student.interface";
import {StudentsService} from "../students.service";

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit{

  studentList: Array<IStudent> = new Array<IStudent>();
  title = 'sc3';


  constructor(private studentsService:StudentsService) {

  }

  addStudent(student: IStudent) {
    this.studentsService.addStudent(student);
    this.studentList = this.studentsService.studentList;
  }

  changeList(list:Array<IStudent>){
    this.studentList = list;
    this.studentsService.setNewList(list);
    this.studentList = this.studentsService.studentList;
  }

  ngOnInit(): void {
    this.studentList = this.studentsService.studentList;
  }
}
