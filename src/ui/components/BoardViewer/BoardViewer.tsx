import React from 'react';
import BoardData, {CellState} from "../../../business_rules/model/BoardData";
import './BoardViewer.scss';
import setCellState from "../../../business_rules/setCellState";

interface Props {
    key?: any;
    board: BoardData;
    selectedColor: CellState;
    onBoardChanged: (b: BoardData) => void;
}

export default function BoardViewer(props: Props) {
    return <div className="board-viewer" data-selected-color={props.selectedColor}>
        {createCells()}
    </div>;


    /// RENDERING
    function createCells() {
        const result: any[] = [];
        props.board.cells.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                result.push(renderCell(rowIndex, columnIndex));
            });
        })

        return result;
    }

    function renderCell(rowIndex: number, columnIndex: number) {
        return <div
            key={rowIndex + "_" + columnIndex}
            className="board-viewer__cell"
            style={{gridRow: rowIndex + 1, gridColumn: columnIndex + 1}}
            data-cell-value={props.board.cells[rowIndex][columnIndex]}
            onClick={() => handleCellStateChange(rowIndex, columnIndex)} />;
    }


    /// ACTIONS
    function handleCellStateChange(rowIndex: number, columnIndex: number) {
        const currentCellContent = props.board.cells[rowIndex][columnIndex];
        const newCellContent = currentCellContent === props.selectedColor? CellState.EMPTY : props.selectedColor;
        props.onBoardChanged(setCellState(props.board, rowIndex, columnIndex, newCellContent));
    }
}


