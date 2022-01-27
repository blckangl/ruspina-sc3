import {Injectable} from '@angular/core';
import {IStudent} from "./shared/models/student.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private initialState: Array<IStudent> = [{firstName: 'ali', lastName: 'ali', id: '379852'}, {
    firstName: 'med',
    lastName: 'ali',
    id: '369952'
  }, {firstName: 'salma', lastName: 'salma', id: '369552'}]
  private _studentList: BehaviorSubject<Array<IStudent>> = new BehaviorSubject<Array<IStudent>>(this.initialState)
  public studentList:Observable<Array<IStudent>> = this._studentList.asObservable();

  constructor() {
    console.log("service created");
    console.log(this.studentList)



  }

  public addStudent(student: IStudent) {
    // this.studentList.push(student);
  }

  public removeStudent(student: IStudent) {
    let tempStudents  = this._studentList.value.filter(x=>x.id != student.id)
    this._studentList.next(tempStudents);
  }

  public setNewList(list: Array<IStudent>) {
    // this.studentList = list;
  }

  public getStudentById(id: string) {
    // return this.studentList.find(x => x.id == id);
  }
}
