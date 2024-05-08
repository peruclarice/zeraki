import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';
import { faArrowRight, faCalendar, faClock, faDotCircle, faEllipsisV, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

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
}
