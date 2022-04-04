import { Room } from './../../models/room.model';
import { Component, Input, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../models/house.model';
import { User } from 'src/app/models/user.model';
import { Floor } from 'src/app/models/floor.model';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';
import Swal from 'sweetalert2';


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
    'active': false,
    'status': '',
    'room': '',
    'floor': ''
  }

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

  public persistDevice() {
    this.deviceService.add(this.myDevice).subscribe(device => {
      this.devicesTow = this.devices = [device, ...this.devices];
      this.showForm = false;
      this.initForm();
    })
  }

  public initForm() {
    this.myDevice = {
      'name': '',
      'active': false,
      'status': '',
      'room': '',
      'floor': ''
    }
  }

  public deleteDevice(id: number) {
    this.deviceService.delete(id).subscribe(() => {
      this.devices = this.devices = this.devices.filter((device: Device) => device.id != id);
    })
  }

  public updateDevice() {

  }
  public active(device: Device) {
    this.deviceService.activeted(device).subscribe(() => {
      device.active = !device.active;
      if (device.status == "On") {
        device.status = "Of"
      } else {
        device.status = "On"
      }
    })
  }

  confirmBox(device: Device) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this.deleteDevice(device.id!);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'error'
        )
      }
    })
  }
}
