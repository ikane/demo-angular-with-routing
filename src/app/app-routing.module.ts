import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { AppComponent } from './app.component';
import { DeviceFormComponent } from './device-form/device-form.component';

const routes: Routes = [
  {path: 'detail/new', component: DeviceFormComponent},
  {path: 'detail/:id', component: DeviceDetailComponent},
  {path: 'devices', component: DeviceComponent}/*,
  { path: '', component: AppComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
