import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine, faCoffee, faFile, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  faCoffee = faCoffee;
  faHouse = faHouse;
  faFile = faFile;
  faUser = faUser;
  faChartLine = faChartLine;
}
