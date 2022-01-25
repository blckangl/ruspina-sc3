import {Component} from '@angular/core';
import {IStudent} from "./shared/models/student.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  studentList: Array<IStudent> = new Array<IStudent>();
  title = 'sc3';


  constructor() {
    this.studentList.push({firstName:'ali',lastName:'ali',id:'379852'})
    this.studentList.push({firstName:'med',lastName:'ali',id:'369952'})
    this.studentList.push({firstName:'salma',lastName:'salma',id:'369552'})
  }

  addStudent(student: IStudent) {
    this.studentList.push(student);
  }
}
