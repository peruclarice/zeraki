import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {
  displayModal = false;

  constructor(private router: Router){}

  joinTheWaitlistModal() {
    this.displayModal = !this.displayModal;
  }
}
