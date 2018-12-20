import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { DeviceDetailDialogComponent } from '../device-detail-dialog/device-detail-dialog.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  devices: Device[] = [];
  device: Device = new Device();

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.dataService.getDevices().subscribe(
      data => {
        console.log(data);
        this.devices = data;
      }
    );
  }

  openDialog(deviceId) {
    this.dialog.open(DeviceDetailDialogComponent, {
      data: {
        'deviceId': deviceId
      }
    });
  }

  saveDevice() {
    console.log(this.device);
    this.dataService.saveDevice(this.device).subscribe(response => {
      console.log(response);
    });
  }

}
