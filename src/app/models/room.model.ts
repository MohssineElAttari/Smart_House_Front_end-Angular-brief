import { Device } from "./device.model";

export interface Room {
    id?: number,
    number: number,
    name: string,
    devices?: Device[]
}

export const initialRoom:Room={"number":0,"name":""};