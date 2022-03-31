import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../models/house.model';
import { User } from 'src/app/models/user.model';
import { Floor } from 'src/app/models/floor.model';
import { Room } from 'src/app/models/room.model';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.GetAllDevices();

  }
  devices: any = []
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


}
