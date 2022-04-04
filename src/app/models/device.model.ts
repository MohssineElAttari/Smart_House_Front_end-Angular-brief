import { Room } from 'src/app/models/room.model';
import { Floor } from 'src/app/models/floor.model';
export interface Device {
    id?: number,
    name: string,
    status: string,
    active: boolean,
    room: string,
    floor: string
}
