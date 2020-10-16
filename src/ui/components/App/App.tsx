import React, {useState} from 'react';
import './App.scss';
import createEmptyBoard from "../../../business_rules/createEmptyBoard";
import BoardViewer from "../BoardViewer/BoardViewer";
import {CellState} from "../../../business_rules/model/BoardData";
import removeDeadStones from "../../../business_rules/removeDeadStones";
import ColorSwitcher from "../ColorSwitcher/ColorSwitcher";

const BOARD_SIZE = 19;

function App() {
    const [board, setBoard] = useState(() => createEmptyBoard(BOARD_SIZE));
    const [selectedColor, setSelectedColor] = useState(CellState.BLACK);

    return (
        <div className="app">
            <main className="app__content">
                <ColorSwitcher selectedColor={selectedColor} onChange={setSelectedColor}/>
                <BoardViewer board={board} selectedColor={selectedColor} onBoardChanged={setBoard}/>
                <div className="app__button-bar">
                    <button onClick={() => setBoard(createEmptyBoard(BOARD_SIZE))}>Reset</button>
                    <button onClick={() => setBoard(removeDeadStones(board, selectedColor))}>Remove Dead</button>
                </div>
            </main>
        </div>
    );
}

export default App;
