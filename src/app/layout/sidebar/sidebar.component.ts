import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket, faChartLine, faCoffee, faFile, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../services/sidebar/sidebar.service';

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
  faArrowRightFromBracket = faArrowRightFromBracket;

  isOpen = false;
  private subscription!: Subscription;

  constructor(private authService: AuthService, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.subscription = this.sidebarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
      // Apply CSS class changes or direct styles as needed
    });
  }

  logout(){
    this.authService.logout();
  }
}
