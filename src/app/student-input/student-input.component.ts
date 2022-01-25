import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";

@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.scss']
})
export class StudentInputComponent implements OnInit {

  @Output() onStudentAdd: EventEmitter<IStudent> = new EventEmitter<IStudent>()

  constructor() {
  }

  ngOnInit(): void {
  }

  addStudent(nameInput: HTMLInputElement, lastInput: HTMLInputElement, idInput: HTMLInputElement) {

    if (nameInput.value.length != 0 && lastInput.value.length != 0 && idInput.value.length == 6) {
      this.onStudentAdd.emit({firstName: nameInput.value, lastName: lastInput.value, id: idInput.value});
      nameInput.value = '';
      lastInput.value = '';
      idInput.value = '';
    }else{

    }

  }

  resetInputs(nameInput: HTMLInputElement, lastInput: HTMLInputElement, idInput: HTMLInputElement) {
    nameInput.value='';
    lastInput.value='';
    idInput.value='';
  }
}
