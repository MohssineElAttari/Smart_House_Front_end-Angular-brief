import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  apiURL = "http://localhost:5000";
  constructor(private http: HttpClient) { }

  findAll() {
    return "";
  }

  addDevice(device: Device) {
    return this.http.put<Device>(
      this.apiURL + `/devices`, device
    )
  }
}
