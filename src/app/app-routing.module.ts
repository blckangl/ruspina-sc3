import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentInputComponent} from "./student-input/student-input.component";
import {StudentsPageComponent} from "./students-page/students-page.component";
import {DetailsPageComponent} from "./details-page/details-page.component";

const routes: Routes = [
  {path:'',component:StudentsPageComponent},
  {path:'detail',component:DetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
