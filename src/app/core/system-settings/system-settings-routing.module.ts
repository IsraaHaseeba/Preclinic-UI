import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemSettingsComponent } from './system-settings.component';
import { LookupsComponent } from './lookups/lookups.component';

const routes: Routes = [{
  path: '', component: SystemSettingsComponent,
  children: [
    {path: "lookups", component: LookupsComponent},
    {
      path: 'user',
      loadChildren: () =>
        import('./user/user.module').then((m) => m.UserModule),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSettingsRoutingModule { }
