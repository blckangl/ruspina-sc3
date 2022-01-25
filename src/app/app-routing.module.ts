import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentInputComponent} from "./student-input/student-input.component";
import {StudentsPageComponent} from "./students-page/students-page.component";
import {DetailsPageComponent} from "./details-page/details-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'',component:StudentsPageComponent},
  {path:'home',redirectTo:''},
  {path:'detail/:id',component:DetailsPageComponent},
  {path:'404',component:NotFoundPageComponent},
  {path:'**',redirectTo:'404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
