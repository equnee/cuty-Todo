import { NgModule } from '@angular/core';
import { SetupComponent } from './setup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SetupComponent],
  imports: [
    SharedModule
    
  ]
})
export class SetupModule { }
