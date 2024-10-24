export type HexKey = `${number}#${number}`;

export class Hex<T> {
  x: number;
  y: number;
  data: T;

  /**
   * Constructor for a Hex object.
   * @param {number} x - The column number of the hex.
   * @param {number} y - The row number of the hex.
   * @param {T} data - The data associated with the hex.
   */
  constructor(x: number, y: number, data: T) {
    /**
     * The column number of the hex.
     */
    this.x = x;

    /**
     * The row number of the hex.
     */
    this.y = y;

    /**
     * The data associated with the hex.
     */
    this.data = data;
  }

  public getKey(): HexKey {
    return `${this.x}#${this.y}`;
  }

  public getData(): T {
    return this.data;
  }
}
