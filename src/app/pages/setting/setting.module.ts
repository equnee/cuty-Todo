import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingRoutingModule } from './setting-routing.module';
import { NzMessageModule, NzUploadModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule,
    NzUploadModule,
    NzMessageModule

  ]
})
export class SettingModule { }
