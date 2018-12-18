import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../device';
import { DataService } from '../data.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  deviceId: number;
  device: Device;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.deviceId = +this.route.snapshot.params['id'];
    this.dataService.getDevice(this.deviceId).subscribe(
      data => {
        console.log(data);
        this.device = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
