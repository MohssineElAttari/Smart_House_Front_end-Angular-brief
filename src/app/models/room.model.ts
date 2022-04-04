import { Device } from "./device.model";

export interface Room {
    id?: number,
    number: number,
    name: string,
    devices?: Device[]
}
