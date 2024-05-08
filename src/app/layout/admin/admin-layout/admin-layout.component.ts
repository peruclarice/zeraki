import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared/shared.module";
import {TopbarComponent} from "../../topbar/topbar.component";
import {AdminSidebarComponent} from "../admin-sidebar/admin-sidebar.component";
import {TeacherSidebarComponent} from "../../teacher/teacher-sidebar/teacher-sidebar.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SharedModule, TopbarComponent, AdminSidebarComponent, TeacherSidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
