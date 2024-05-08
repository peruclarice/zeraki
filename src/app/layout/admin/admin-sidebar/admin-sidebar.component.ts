import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChartLine, faFile, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [SharedModule, FontAwesomeModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {
  faHouse = faHouse;
  faFile = faFile;
  faUser = faUser;
  faChartLine = faChartLine;
}
