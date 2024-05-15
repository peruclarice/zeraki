import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { AuthService, IUser } from '../../services/auth/auth.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  user: IUser | null = null;

  constructor(private authService: AuthService, private sidebarService: SidebarService) {}

  ngOnInit(): void {
      this.user = this.authService.getUser();
      console.log("User data:", this.user);
  }

  logout(){
    this.authService.logout();
  }
  
  toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}
