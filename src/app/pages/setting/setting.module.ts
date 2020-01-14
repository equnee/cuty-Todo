import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingRoutingModule } from './setting-routing.module';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule

  ]
})
export class SettingModule { }
