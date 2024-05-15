import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../../../shared/shared/shared.module";
import { faArrowRight, faCalendar, faClock, faDotCircle, faEllipsisV, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import {Subscription} from "rxjs";
import {Student} from "../../../services/students/IStudent";
import {StudentsService} from "../../../services/students/students.service";
import { IUser, AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-student-overview',
  standalone: true,
  imports: [
    FaIconComponent, SharedModule
  ],
  templateUrl: './student-overview.component.html',
  styleUrl: './student-overview.component.scss'
})
export class StudentOverviewComponent implements OnInit, OnDestroy{
  faCalendar = faCalendar;
  faClock = faClock;
  faEnvelope = faEnvelope;
  faDotVertical = faEllipsisV;
  faFile = faFile;
  faArrowRight = faArrowRight;

  students: Student[] = []; // Plain array
  private subscriptions: Subscription = new Subscription();
  user: IUser | null = null;

  constructor(private studentsService: StudentsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.loadData();
  }

  loadData(): void {
    this.subscriptions.add(this.studentsService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        console.log('Students:', this.students);
      },
      error: (err) => console.error('Failed to load students:', err)
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Clean up the subscription
  }
}
