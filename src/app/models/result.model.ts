import { IOriginLocation } from "./origin.model";

export interface IResult {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOriginLocation;
    location: IOriginLocation;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export class Result implements IResult {
    id!: number;
    name!: string;
    status!: string;
    species!: string;
    type!: string;
    gender!: string;
    origin!: IOriginLocation;
    location!: IOriginLocation;
    image!: string;
    episode!: string[];
    url!: string;
    created!: Date;
}