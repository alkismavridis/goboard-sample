import BoardData, {CellState} from "../../business_rules/model/BoardData";
import cloneBoard from "../../business_rules/cloneBoard";

test('should create deep clone', () => {
    const board = new BoardData([
        [CellState.EMPTY, CellState.WHITE],
        [CellState.BLACK, CellState.EMPTY]
    ]);

    const clone = cloneBoard(board);

    expect(clone.cells).toStrictEqual(board.cells);

    expect(clone).not.toBe(board);
    expect(clone.cells).not.toBe(board.cells);
    for (let i = 0; i < board.cells.length; ++i) {
        expect(clone.cells[i]).not.toBe(board.cells[i]);
    }
});
