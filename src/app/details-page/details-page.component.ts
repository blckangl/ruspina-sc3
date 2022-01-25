import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  id!:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params)
      this.id = params['id']
    })
  }

}
