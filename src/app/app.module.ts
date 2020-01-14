//引入模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// module
import { AppRoutingModule } from './app-routing.module';//引入路由模块
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';
import { SharedModule } from './shared/shared.module';
import { SummaryModule } from './pages/summary/summary.module';
import { SettingModule } from './pages/setting/setting.module';


//service
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ListService } from './services/list/list.service';
import { TodoService } from './services/todo/todo.service';
import { InitGuardService } from './services/init-guard/init-guard.service';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SetupModule,
    MainModule,
    SharedModule,
    SummaryModule,
    SettingModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    LocalStorageService,
    ListService,
    TodoService,
    InitGuardService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
