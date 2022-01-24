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

  addStudent(student: IStudent) {
    this.studentList.push(student);
  }
}
