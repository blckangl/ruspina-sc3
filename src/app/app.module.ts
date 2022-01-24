import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentInputComponent } from './student-input/student-input.component';
import { StudentElementComponent } from './student-element/student-element.component';
import { CustomButtonDirective } from './custom-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentInputComponent,
    StudentElementComponent,
    CustomButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
