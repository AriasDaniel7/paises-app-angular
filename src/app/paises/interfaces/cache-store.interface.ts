import { Region } from '../types/paises.type';
import { Paises } from "./paises.interface";

export interface CacheStore {
  porCapital: busquedaPaises;
  porPais: busquedaPaises;
  porRegion: RegionPaises;
}

export interface busquedaPaises {
  busqueda: string;
  paises: Paises[];
}

export interface RegionPaises {
  region: Region;
  paises: Paises[];
}
