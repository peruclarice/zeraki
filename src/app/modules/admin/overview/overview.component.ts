import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';
import { faArrowRight, faCalendar, faClock, faDotCircle, faEllipsisV, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { IUser, AuthService } from '../../../services/auth/auth.service';
import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  faCalendar = faCalendar;
  faClock = faClock;
  faEnvelope = faEnvelope;
  faDotVertical = faEllipsisV;
  faFile = faFile;
  faArrowRight = faArrowRight;

  user: IUser | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.user = this.authService.getUser();
      // console.log("User data:", this.user);
  }
}
