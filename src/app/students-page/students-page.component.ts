import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";
import {StudentsService} from "../students.service";

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  studentList: Array<IStudent> = new Array<IStudent>();
  title = 'sc3';


  constructor(private studentsService: StudentsService) {

  }



  ngOnInit(): void {
    this.studentsService.studentList.subscribe(newlist => {
      console.log("subject changed")
      this.studentList = newlist;
    })
  }
}
