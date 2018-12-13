import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Device } from './device';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'microservice1-ui';
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
