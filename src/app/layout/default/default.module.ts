import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material-module';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    // FlexLayoutModule,
    ComponentsModule
  ]
})
export class DefaultModule { }
