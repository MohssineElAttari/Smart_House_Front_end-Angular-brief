import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  apiURL = "http://localhost:5000/houses";
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Device[]>(this.apiURL);
  }
}
