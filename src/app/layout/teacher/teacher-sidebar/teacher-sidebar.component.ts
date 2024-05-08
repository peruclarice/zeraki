import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChartLine, faFile, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-sidebar',
  standalone: true,
  imports: [SharedModule, FontAwesomeModule],
  templateUrl: './teacher-sidebar.component.html',
  styleUrl: './teacher-sidebar.component.scss'
})
export class TeacherSidebarComponent {
  faHouse = faHouse;
  faFile = faFile;
  faUser = faUser;
  faChartLine = faChartLine;
}
