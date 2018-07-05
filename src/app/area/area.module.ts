import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './area/area.component';
import { AreaService } from './area.service';

@NgModule({
  imports: [
    CommonModule,
    AreaRoutingModule
  ],
  declarations: [AreaComponent],
  providers: [AreaService, AreaComponent],

})
export class AreaModule { }
