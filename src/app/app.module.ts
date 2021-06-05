import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardSideComponent } from './components/dashboard-side/dashboard-side.component';
import { DashboardRightSideComponent } from './components/dashboard-right-side/dashboard-right-side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './components/header/header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardSideComponent,
    DashboardRightSideComponent,
    HeaderComponent,
    AllStudentsComponent,
    EditStudentComponent,
    AllCoursesComponent,
    EditCourseComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatStepperModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
