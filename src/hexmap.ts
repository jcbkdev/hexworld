import type { Hex, HexKey } from "./hex.ts";

const map1 = new Map();

export class HexMap<T> {
  map: Map<HexKey, Hex<T>> = new Map();
  length: number = this.map.size;
  private updateLength() {
    this.length = this.map.size;
  }

  public addHex(hex: Hex<T>) {
    this.map.set(hex.getKey(), hex);
    this.updateLength();
  }

  public getHexByKey(key: HexKey): Hex<T> | undefined {
    const hex: Hex<T> | undefined = this.map.get(key);
    return hex;
  }

  public getRow(y: number): Hex<T>[] {
    return Array.from(this.map.values()).filter((hex) => hex.y === y);
  }

  public getColumn(x: number): Hex<T>[] {
    return Array.from(this.map.values()).filter((hex) => hex.x === x);
  }
}
