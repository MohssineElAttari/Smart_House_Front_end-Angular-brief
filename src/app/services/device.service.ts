import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpclient: HttpClient) { }
  private apiURL: string = "http://localhost:5000/devices";
  public findAll() {
    return this.httpclient.get(this.apiURL);
  }
}
