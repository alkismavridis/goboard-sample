import React from 'react';
import {CellState} from "../../../business_rules/model/BoardData";
import "./ColorSwitcher.scss";

interface Props {
    onChange: (c: CellState) => void;
    selectedColor: CellState;
}

export default function ColorSwitcher(props: Props) {
    return <div className="color-switcher__root" data-color={props.selectedColor}>
        <button className="color-switcher__white" title="Switch color" onClick={() => switchSelectedColor()} />
        <button className="color-switcher__black" title="Switch color" onClick={() => switchSelectedColor()} />
    </div>;


    /// ACTIONS
    function switchSelectedColor() {
        const newColor = props.selectedColor === CellState.BLACK ? CellState.WHITE : CellState.BLACK;
        props.onChange(newColor);
    }
}
