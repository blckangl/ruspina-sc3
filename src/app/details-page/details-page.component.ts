import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IStudent} from "../shared/models/student.interface";
import {StudentsService} from "../students.service";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  student!: IStudent | undefined;

  constructor(private route: ActivatedRoute,private router:Router, private studentService: StudentsService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.student = this.studentService.getStudentById(params['id']);
      if(!this.student){
         this.router.navigate(['404'])
      }
    })
  }

}
