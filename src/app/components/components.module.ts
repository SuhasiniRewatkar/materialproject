import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../material-module';
import { ProfileComponent } from '../profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    FormsModule,ReactiveFormsModule
    // FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
  entryComponents: [ProfileComponent]
})
export class ComponentsModule { }
