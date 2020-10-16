import BoardData, {CellState} from "../../business_rules/model/BoardData";
import setCellState from "../../business_rules/setCellState";

test('should create deep clone with only one cell difference', () => {
    const board = new BoardData([
        [CellState.EMPTY, CellState.WHITE],
        [CellState.BLACK, CellState.EMPTY]
    ]);

    const updated = setCellState(board, 1, 1, CellState.BLACK);

    expect(updated).not.toBe(board);
    expect(updated.cells).not.toBe(board.cells);
    for (let i = 0; i < board.cells.length; ++i) {
        expect(updated.cells[i]).not.toBe(board.cells[i]);
    }

    expect(updated.cells[0][0]).toBe(CellState.EMPTY);
    expect(updated.cells[0][1]).toBe(CellState.WHITE);
    expect(updated.cells[1][0]).toBe(CellState.BLACK);
    expect(updated.cells[1][1]).toBe(CellState.BLACK);
});
