import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>('http://localhost:8080/devices');
  }

  getDevice(deviceId: number): Observable<Device> {
    return this.http.get<Device>('http://localhost:8080/devices/' + deviceId);
  }

  saveDevice(device: Device) {
    return this.http.post('http://localhost:8080/devices/', device);
  }
}
