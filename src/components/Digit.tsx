import React from 'react';
import './Digit.scss';

interface DigitProps {
    value: number;
    digitID: number;
    // the onClick event hook gets passed which digit this is and a direction
    // 1 for an increase and -1 for a decrease.
    onClick: (digitID: number, direc: number) => void;
}

function Digit (props: DigitProps) {
    // Digit is a completely controlled component - everything is defined
    // through it's props, and it stores no state of itself.

    const digit = props.digitID;

    return (
        <div className="digit">
            <button className="digit-btn" onClick={() => { props.onClick(digit, 1) }}>
                {"/\\"}
            </button>
            <div className="digit-label">
                {`${props.value}`}
            </div>
            <button className="digit-btn" onClick={() => { props.onClick(digit, -1) }}>
                {"\\/"}
            </button>
        </div>
    );
}

export default Digit;