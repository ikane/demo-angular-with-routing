import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DataService } from '../data.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  devices: Device[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDevices().subscribe(
      data => {
        console.log(data);
        this.devices = data;
      }
    );
  }

}
