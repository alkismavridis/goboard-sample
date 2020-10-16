import BoardData, {CellState} from "./model/BoardData";

/** Returns a deep copy of the given board. */
export default function cloneBoard(other: BoardData) : BoardData {
    const cells: CellState[][] = [];
    other.cells.forEach(it => cells.push(it.slice()));

    return new BoardData(cells);
}
