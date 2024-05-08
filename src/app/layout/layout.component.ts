import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [SharedModule, TopbarComponent, SidebarComponent],
})
export class LayoutComponent {

}
