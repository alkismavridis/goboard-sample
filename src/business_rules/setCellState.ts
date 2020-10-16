import BoardData, {CellState} from "./model/BoardData";
import cloneBoard from "./cloneBoard";

/** Returns a clone of the given board with the given */
export default function setCellState(board:BoardData, row: number, column: number, color: CellState) : BoardData {
    const clone = cloneBoard(board);
    clone.cells[row][column] = color;

    return clone;
}
