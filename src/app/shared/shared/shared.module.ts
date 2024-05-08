import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
