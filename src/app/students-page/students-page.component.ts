import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IStudent} from "../shared/models/student.interface";
import {StudentsService} from "../students.service";
import {debounceTime, fromEvent, Observable} from "rxjs";

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit, AfterViewInit {

  studentList: Array<IStudent> = new Array<IStudent>();  //unfiltered
  filtredList:Array<IStudent> = this.studentList;  //filtered
  title = 'sc3';
  searchObservable!: Observable<any>;
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private studentsService: StudentsService) {

  }

  ngAfterViewInit(): void {
    this.searchObservable = fromEvent(this.searchInput.nativeElement, 'keyup');

    this.searchObservable.pipe(debounceTime(300)).subscribe(res => {
      const searchValue = res.target.value;
      console.log(res.target.value);
      if(searchValue.length>0){
        this.filtredList = this.studentList.filter(x=>x.firstName.includes(searchValue)||x.lastName.includes(searchValue)||x.id.includes(searchValue))
      }else{
        this.filtredList = this.studentList;
      }
    })
  }


  ngOnInit(): void {
    this.studentsService.studentList.subscribe(newlist => {
      console.log("subject changed")
      this.studentList = newlist;
      this.filtredList = this.studentList;
    })
  }


}
