import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LeftControlComponent } from './left-control/left-control.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [MainComponent, LeftControlComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzLayoutModule,
    NzCollapseModule,
    NgZorroAntdModule,
    NzDropDownModule,
    NzIconModule
  ]
})
export class MainModule { }
