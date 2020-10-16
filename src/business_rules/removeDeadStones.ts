import BoardData, {CellState} from "./model/BoardData";
import cloneBoard from "./cloneBoard";

export default function removeDeadStones(board: BoardData, firstColorToRemove: CellState) : BoardData {
    const cloned = cloneBoard(board);
    const otherColor = firstColorToRemove === CellState.WHITE ? CellState.BLACK : CellState.WHITE;

    removeDeadStonesForColor(cloned, firstColorToRemove);
    removeDeadStonesForColor(cloned, otherColor);

    return cloned;
}


/// UTILS
function removeDeadStonesForColor(boardData: BoardData, colorToRemove: CellState) {
    const size = boardData.cells.length;
    const pairsToRemove: number[][] = [];

    for (let row = 0; row < size; ++row) {
        for (let column = 0; column < size; ++column) {
            if (boardData.cells[row][column] === colorToRemove && !isAlive(boardData, row, column, colorToRemove, new Set<string>())) {
                pairsToRemove.push([row, column]);
            }
        }
    }

    pairsToRemove.forEach(it => {
        boardData.cells[it[0]][it[1]] = CellState.EMPTY;
    });
}

export function isAlive(boardData: BoardData, row: number, column: number, color: CellState, alreadyCheckedCells: Set<string>) : boolean {
    const size = boardData.cells.length;
    if (row < 0 || row >= size) return false;
    if (column < 0 || column >= size) return false;

    const currentCell = boardData.cells[row][column];
    if (currentCell === CellState.EMPTY) return true;
    if (currentCell !== color) return false;

    const cellId = row + "_" + column;
    if (alreadyCheckedCells.has(cellId)) return false;
    alreadyCheckedCells.add(cellId);

    return isAlive(boardData, row, column + 1, color, alreadyCheckedCells) ||
        isAlive(boardData, row, column - 1, color, alreadyCheckedCells) ||
        isAlive(boardData, row + 1, column, color, alreadyCheckedCells) ||
        isAlive(boardData, row - 1, column, color, alreadyCheckedCells);
}
