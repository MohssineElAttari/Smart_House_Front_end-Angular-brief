import { Room } from './../../models/room.model';
import { Component, Input, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../models/house.model';
import { User } from 'src/app/models/user.model';
import { Floor } from 'src/app/models/floor.model';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }
  // @Input() myTest: any;
  ngOnInit(): void {
    this.GetAllDevices();

  }

  myDevice: Device = {
    'name': '',
    'status': false,
    'room': '',
    'floor': ''
  }

  // myRoom: Room = {
  //   'number': 0,
  //   'name': '',
  // }

  devices: any = [];

  devicesTow: any = [];

  editForm: boolean = false;

  showForm: boolean = false;

  searchText: string = '';
  houses: House[] = [];
  user: User[] = [];
  floors: Floor[] = [];
  rooms: Room[] = [];
  /**
   * GetAllHouses
   */
  public GetAllDevices() {
    return this.deviceService.findAll().
      subscribe((device) => {
        this.devices = device;
        console.log(this.devices);
      });
  }

  public updateDevice() {

  }

  public persistDevice() {
    this.deviceService.addDevice(this.myDevice).subscribe(device => {
      this.devicesTow = this.devices = [device, ...this.devices];
      this.showForm=false;
    })

  }

}
