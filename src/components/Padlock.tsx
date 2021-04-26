import React, { useState } from 'react';
// import Anime from 'react-anime';

import './Padlock.scss';
import Digit from './Digit';
import Shackle from './Shackle';

function Padlock() {
    const [values, setValues] = useState([0, 0, 0]);
    const [locked, setLockState] = useState(true);

    const correctValues = [1, 2, 3];

    // Locks or Unlocks the padlock
    const toggleLock = () => {
        setLockState(!locked);
    }

    const handleClick = (id: number, direc: number) => {
        if (!locked) {
            return;
        }
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
            console.log('correct!');
            toggleLock();
        }
        else {
            console.log('wrong!');
        }
    }

    return (
        <div className="padlock-app">
            <div className="padlock">
                <Shackle locked={locked}/>
                <div className="padlock-body">
                    {/* This could be done in a loop, but it'd be more effort than it's worth. */}
                    <Digit digitID={0} value={values[0]} onClick={handleClick}/>
                    <Digit digitID={1} value={values[1]} onClick={handleClick}/>
                    <Digit digitID={2} value={values[2]} onClick={handleClick}/>
                </div>
            </div>
            <div className="btns">
                <button className="validate-btn" onClick={validate}>Validate</button>
            </div>
        </div>
    );
}

export default Padlock;