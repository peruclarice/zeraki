import {Component, OnInit} from '@angular/core';
import {AssignmentsService} from '../../../services/assignments/assignments.service';
// import { Assignment } from '../../../mock-api/dashboards/assignments/data';
import {HttpClientModule} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared/shared/shared.module";
import {faCalendar, faClock, faEllipsisV} from "@fortawesome/free-solid-svg-icons";

interface Assignment {
  id: number;
  title: string;
  subtitle: string;
  subject: string;
  teacherId: number;  // Foreign key to reference a teacher
  description: string;
  date: string;       // Format YYYY-MM-DD for simplicity
  time: string;       // Time in HH:MM format
  status: 'active' | 'upcoming'; // Status of the assignment
  thumbnail?: string;
  teacher?: {
    id: string;
    name: string;
    avatar: string;
    email: string;
    phone: string;
  };
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss',
  standalone: true,
  imports: [SharedModule]
})
export class AssignmentsComponent implements OnInit {
  // assignments$?: Observable<Assignment[]>;
  assignments: Assignment[] = []; // Plain array
  private subscriptions: Subscription = new Subscription();

  constructor(private assignmentService: AssignmentsService) {
  }

  ngOnInit(): void {
    // this.assignments$ = this.assignmentService.getAssignments();
    // console.log('Assignments:', this.assignments$);

    this.loadAssignments();

  }

  loadAssignments(): void {
    this.subscriptions.add(this.assignmentService.getAssignments().subscribe({
      next: (assignments) => {
        this.assignments = assignments;
        console.log('Assignments:', this.assignments);
      },
      error: (err) => console.error('Failed to load assignments:', err)
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Clean up the subscription
  }

  protected readonly faCalendar = faCalendar;
  protected readonly faDotVertical = faEllipsisV;
  protected readonly faClock = faClock;
}
