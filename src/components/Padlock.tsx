import React, { useState } from 'react';
import './Padlock.scss';
import Digit from './Digit';

function Padlock() {
    const [values, setValues] = useState([0, 0, 0]);

    const correctValues = [1, 2, 3];

    const handleClick = (id: number, direc: number) => {
        // console.log("Clicked " + id + " in direction of " + direc);

        // Keeps `values` immutable
        let newValues: Array<number> = values.slice();
        newValues[id] += direc;
        setValues(newValues);
    }

    // Function compares if the stored `values` state is equivalent to `correctValues`
    // By comparing each individual element.
    const isCorrect = () => {
        for (let i = 0; i < 3; i++) {
            if (values[i] !== correctValues[i]) {
                return false;
            }
        }
        return true;
    }

    // Called when the "validate" button is pressed
    // Just a simple alert for now to test the basic functionality.
    const validate = () => {
        const correct: boolean = isCorrect();
        if (correct) {
            alert("Correct!");
        }
        else {
            alert("Wrong!");
        }
    }

    return (
        <div className="padlock">
            <h1>Padlock</h1>
            {/* This could be done in a loop, but it'd be more effort than it's worth. */}
            <Digit digitID={0} value={values[0]} onClick={handleClick}/>
            <Digit digitID={1} value={values[1]} onClick={handleClick}/>
            <Digit digitID={2} value={values[2]} onClick={handleClick}/>
            <button className="validate-btn" onClick={validate}>Validate</button>
        </div>
    );
}

export default Padlock;