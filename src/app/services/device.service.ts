import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }
  private apiURL: string = "http://localhost:5000";

  public findAll() {
    return this.http.get<Device>(this.apiURL + `/devices`);
  }

  public add(device: Device) {
    return this.http.post(this.apiURL + `/devices`, device);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/devices/${id}`)
  }
  activeted(device: Device) {
    return this.http.patch(`${this.apiURL}/devices/${device.id}`, { active: !device.active, status: device.status == 'On' ? 'Of' : 'On' });
  }
}
