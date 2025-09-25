import { IInfo } from "./info.model";
import { IResult } from "./result.model";

export interface IRickAndMorty {
    info: IInfo;
    results: IResult[];
}

export class RickAndMorty implements IRickAndMorty {
    info!: IInfo;
    results!: IResult[];
}