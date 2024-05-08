import { Injectable } from '@angular/core';
import {Student} from "./IStudent";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = 'assets/mock-data/students/data.json';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // Get a single student by ID from static JSON
  // getStudentById(id: number): Observable<Student | null> {
  //   return this.http.get<Student[]>(this.apiUrl).pipe(
  //     map(students => students.find(student => student.id === id) || null)
  //   );
  // }
}
