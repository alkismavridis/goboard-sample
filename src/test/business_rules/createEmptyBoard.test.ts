import createEmptyBoard from "../../business_rules/createEmptyBoard";
import {CellState} from "../../business_rules/model/BoardData";

test('should initialize empty board', () => {
   const result = createEmptyBoard(19);
   expect(result.cells.length).toBe(19);

   result.cells.forEach(it => {
      expect(it.length).toBe(19);
      expect(it.every(cell => cell === CellState.EMPTY)).toBe(true);
   });
});

