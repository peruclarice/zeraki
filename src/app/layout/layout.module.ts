import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class LayoutModule { }
