import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { SystemSettingsComponent } from './system-settings.component';
import { LookupsComponent } from './lookups/lookups.component';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    SystemSettingsComponent,
    LookupsComponent
  ],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule,
    MatListModule,
    MatButtonModule,
    SharedModule,
    MatRadioModule
  ]
})
export class SystemSettingsModule { }
