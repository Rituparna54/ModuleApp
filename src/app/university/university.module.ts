import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'student', component: StudentComponent }
    ])
  ]
})
export class UniversityModule { }
