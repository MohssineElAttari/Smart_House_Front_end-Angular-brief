import { Device } from "./device.model";

export interface Room {
    id: number,
    number: number,
    devices: Device[]
}
