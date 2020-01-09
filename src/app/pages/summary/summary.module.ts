import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryService } from './summary.service';



@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    SummaryRoutingModule
  ],
  providers: [ SummaryService ]
})
export class SummaryModule { }
