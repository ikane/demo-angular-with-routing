import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatChipsModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceDetailDialogComponent } from './device-detail-dialog/device-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    DeviceDetailComponent,
    DeviceDetailDialogComponent
  ],
  entryComponents: [
    DeviceDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    NgbModule,
    MatButtonModule, MatCheckboxModule, MatDialogModule, MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
