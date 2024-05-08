import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared/shared.module";
import {TopbarComponent} from "../../topbar/topbar.component";
import {TeacherSidebarComponent} from "../teacher-sidebar/teacher-sidebar.component";
import {SidebarComponent} from "../../sidebar/sidebar.component";

@Component({
  selector: 'app-teacher-layout',
  standalone: true,
  imports: [SharedModule, TopbarComponent, TeacherSidebarComponent, SidebarComponent],
  templateUrl: './teacher-layout.component.html',
  styleUrl: './teacher-layout.component.scss'
})
export class TeacherLayoutComponent {

}
