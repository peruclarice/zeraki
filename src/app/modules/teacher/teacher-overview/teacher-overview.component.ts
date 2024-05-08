import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../../../shared/shared/shared.module";
import { faArrowRight, faCalendar, faClock, faDotCircle, faEllipsisV, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import {Student} from "../../../services/students/IStudent";
import {Subscription} from "rxjs";
import {StudentsService} from "../../../services/students/students.service";

@Component({
  selector: 'app-teacher-overview',
  standalone: true,
  imports: [
    FaIconComponent, SharedModule
  ],
  templateUrl: './teacher-overview.component.html',
  styleUrl: './teacher-overview.component.scss'
})
export class TeacherOverviewComponent {
  faCalendar = faCalendar;
  faClock = faClock;
  faEnvelope = faEnvelope;
  faDotVertical = faEllipsisV;
  faFile = faFile;
  faArrowRight = faArrowRight;

  students: Student[] = []; // Plain array
  private subscriptions: Subscription = new Subscription();

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit(): void {
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
