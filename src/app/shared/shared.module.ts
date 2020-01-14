import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NzMessageModule, NzUploadModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [
  CommonModule,
  FormsModule,
  NgZorroAntdModule,
  BrowserAnimationsModule,
];


@NgModule({
  declarations: [],
  imports: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [],

})
export class SharedModule { }
