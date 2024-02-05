import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemSettingsComponent } from './system-settings.component';
import { LookupsComponent } from './lookups/lookups.component';

const routes: Routes = [{
  path: '', component: SystemSettingsComponent,
  children: [
    {path: "lookups", component: LookupsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSettingsRoutingModule { }
