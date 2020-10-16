import {CellState} from "../../business_rules/model/BoardData";
import createEmptyBoard from "../../business_rules/createEmptyBoard";
import removeDeadStones, {isAlive} from "../../business_rules/removeDeadStones";


/// isAlive TESTS
test('stones on the left of empty should be alive', () => {
    const board = createEmptyBoard(19);
    board.cells[5][5] = CellState.WHITE;
    board.cells[5][4] = CellState.BLACK; //block top, bottom, left
    board.cells[5][6] = CellState.BLACK;
    board.cells[6][5] = CellState.BLACK;

    expect(isAlive(board, 5, 5, CellState.WHITE, new Set<string>())).toBe(true);
});

test('stone surrounded with other colors should be dead', () => {
    const board = createEmptyBoard(19);
    board.cells[5][5] = CellState.WHITE;
    board.cells[5][4] = CellState.BLACK; //block top, bottom, left
    board.cells[5][6] = CellState.BLACK;
    board.cells[6][5] = CellState.BLACK;
    board.cells[4][5] = CellState.BLACK;

    expect(isAlive(board, 5, 5, CellState.WHITE, new Set<string>())).toBe(false);
});

test('stone should be dead if surrounded by wall and other stones', () => {
    const board = createEmptyBoard(19);
    board.cells[5][18] = CellState.WHITE;
    board.cells[4][18] = CellState.BLACK; //block top, bottom, left and right
    board.cells[6][18] = CellState.BLACK;
    board.cells[5][17] = CellState.BLACK;

    expect(isAlive(board, 5, 18, CellState.WHITE, new Set<string>())).toBe(false);
});

test('stone should be alive if neighbour is alive', () => {
    const board = createEmptyBoard(19);
    board.cells[5][18] = CellState.WHITE;
    board.cells[4][18] = CellState.BLACK; //block top, bottom, left and right
    board.cells[6][18] = CellState.BLACK;
    board.cells[5][17] = CellState.WHITE;

    expect(isAlive(board, 5, 18, CellState.WHITE, new Set<string>())).toBe(true);
});



/// removeDeadStones TESTS
test('should remove dead stones (white first)', () => {
    const board = createEmptyBoard(5);

    board.cells[0] = [CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.WHITE];
    board.cells[1] = [CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.WHITE];
    board.cells[2] = [CellState.WHITE, CellState.EMPTY, CellState.BLACK, CellState.BLACK, CellState.WHITE];
    board.cells[3] = [CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.WHITE];
    board.cells[4] = [CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.WHITE];

    const result = removeDeadStones(board, CellState.WHITE);
    expect(result.cells[0]).toStrictEqual([CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.EMPTY])
    expect(result.cells[1]).toStrictEqual([CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.EMPTY]);
    expect(result.cells[2]).toStrictEqual([CellState.WHITE, CellState.EMPTY, CellState.BLACK, CellState.BLACK, CellState.EMPTY]);
    expect(result.cells[3]).toStrictEqual([CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.EMPTY]);
    expect(result.cells[4]).toStrictEqual([CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.EMPTY]);
});

test('should remove dead stones (black first)', () => {
    const board = createEmptyBoard(5);

    board.cells[0] = [CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.WHITE];
    board.cells[1] = [CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.WHITE];
    board.cells[2] = [CellState.WHITE, CellState.EMPTY, CellState.BLACK, CellState.BLACK, CellState.WHITE];
    board.cells[3] = [CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.WHITE];
    board.cells[4] = [CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.WHITE];

    const result = removeDeadStones(board, CellState.BLACK);
    expect(result.cells[0]).toStrictEqual([CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.EMPTY])
    expect(result.cells[1]).toStrictEqual([CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.EMPTY]);
    expect(result.cells[2]).toStrictEqual([CellState.WHITE, CellState.EMPTY, CellState.BLACK, CellState.BLACK, CellState.EMPTY]);
    expect(result.cells[3]).toStrictEqual([CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.EMPTY]);
    expect(result.cells[4]).toStrictEqual([CellState.WHITE, CellState.WHITE, CellState.BLACK, CellState.BLACK, CellState.EMPTY]);
});
