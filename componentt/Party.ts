import {Deputy} from "./Depty";

export interface Party {
    name: string;
    mainParty: Deputy;
    members: Array<Deputy>;
}