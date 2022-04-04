import { Floor } from "./floor.model";
import { User } from "./user.model";

export interface House {
    id: number,
    name: string,
    adress: string,
    user?: User,
    floors?: Floor[]
}
