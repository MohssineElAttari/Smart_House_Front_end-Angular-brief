import { Room } from "./room.model";

export interface Floor {
    id: number,
    number: number,
    rooms: Room[]
}
