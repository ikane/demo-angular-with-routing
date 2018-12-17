import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Device } from '../device';
import { DataService } from '../data.service';

@Component({
  selector: 'app-device-detail-dialog',
  templateUrl: './device-detail-dialog.component.html',
  styleUrls: ['./device-detail-dialog.component.css']
})
export class DeviceDetailDialogComponent implements OnInit {

  device: Device;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService
    ) { }

  ngOnInit() {
    if (this.data != null) {
      console.log(this.data);
      this.dataService.getDevice(this.data.deviceId).subscribe(d => {
        this.device = d;
        console.log(this.device);
      });
    }
  }

}
