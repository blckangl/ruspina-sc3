import {Injectable} from '@angular/core';
import {IStudent} from "./shared/models/student.interface";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public studentList: Array<IStudent> = new Array<IStudent>();

  constructor() {
    this.studentList.push({firstName: 'ali', lastName: 'ali', id: '379852'})
    this.studentList.push({firstName: 'med', lastName: 'ali', id: '369952'})
    this.studentList.push({firstName: 'salma', lastName: 'salma', id: '369552'})
  }

  public addStudent(student: IStudent) {
    this.studentList.push(student);
  }

  public setNewList(list: Array<IStudent>) {
    this.studentList = list;
  }

  public getStudentById(id:string){
    return this.studentList.find(x=>x.id==id);
  }
}
