import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { DashboardRightSideComponent } from './components/dashboard-right-side/dashboard-right-side.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default path 
  {path:'dashboard' , component:DashboardRightSideComponent},
  {path:'header' , component:HeaderComponent},
  {path:'allStudent' , component:AllStudentsComponent},
  {path:'editStudent' ,component:EditStudentComponent},
  {path:'allCourses' , component:AllCoursesComponent},
  {path:'editCourses' , component:EditCourseComponent},
  {path:'addCourse' , component:AddCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
