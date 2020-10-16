export enum CellState {
    WHITE,
    BLACK,
    EMPTY
}

export default class BoardData {
    constructor(public cells: CellState[][]) {}
}
