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
  public studentList: Observable<Array<IStudent>> = this._studentList.asObservable();

  constructor() {

  }

  public addStudent(student: IStudent) {
    // let tempArray = this._studentList.value;
    // tempArray.push(student);

    this._studentList.next([student, ...this._studentList.value])
  }

  public removeStudent(student: IStudent) {
    let tempStudents = this._studentList.value.filter(x => x.id != student.id)
    this._studentList.next(tempStudents);
  }

  public setNewList(list: Array<IStudent>) {
    // this.studentList = list;
  }

  public getStudentById(id: string): IStudent | undefined {
    return this._studentList.value.find(x => x.id == id)
  }
}
