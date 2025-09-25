export interface IOriginLocation {
    name: string;
    location: string;
}

export class OriginLocation implements IOriginLocation {
    name!: string;
    location!: string;
}