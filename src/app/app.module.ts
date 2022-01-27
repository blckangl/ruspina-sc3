import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentInputComponent } from './student-input/student-input.component';
import { StudentElementComponent } from './student-element/student-element.component';
import { CustomButtonDirective } from './custom-button.directive';
import { CapitalTextDirective } from './capital-text.directive';
import { StudentsPageComponent } from './students-page/students-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {StudentsService} from "./students.service";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentInputComponent,
    StudentElementComponent,
    CustomButtonDirective,
    CapitalTextDirective,
    StudentsPageComponent,
    DetailsPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
