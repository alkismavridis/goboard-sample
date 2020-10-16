import BoardData, {CellState} from "./model/BoardData";


export default function createEmptyBoard(size: number) : BoardData {
    const cells: CellState[][] = [];
    for (let i = 0; i < size; ++i) {
        const row: CellState[] = [];
        for (let j = 0; j < size; ++j) {
            row.push(CellState.EMPTY);
        }

        cells.push(row);
    }

    return new BoardData(cells);
}
