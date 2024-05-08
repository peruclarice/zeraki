import { Injectable } from '@angular/core';
import { ASSIGNMENTS, Assignment } from '../../mock-api/dashboards/assignments/data';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private assignments: Assignment[] = ASSIGNMENTS;
  // private apiUrl = '/app/mock-api/dashboards/assignments/data.ts';
  private apiUrl = 'assets/mock-data/assignments/data.json';

  constructor(private http: HttpClient) {}

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrl);
  }

  getAssignmentById(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.apiUrl}/${id}`);
  }

  addAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.apiUrl, assignment);
  }

  updateAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.put<Assignment>(`${this.apiUrl}/${assignment.id}`, assignment);
  }

  deleteAssignment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
