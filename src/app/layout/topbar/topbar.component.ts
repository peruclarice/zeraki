import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
}
