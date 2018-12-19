import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DataService } from '../data.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  device: Device = new Device();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  saveDevice() {
    console.log(this.device);
    this.dataService.saveDevice(this.device).subscribe(response => {
      console.log(response);
    });
  }

}
