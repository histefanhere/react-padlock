import React, { useState } from 'react';
// import Anime from 'react-anime';

import './Padlock.scss';
import Digit from './Digit';
import { ReactComponent as Shackle } from './shackle.svg';

// Utility function for randomly generating a number (inclusive)
const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


function Padlock() {
    // Generate a list of 3 random numbers to be the initial values of the counters
    let initialValues: number[] = Array(3)
    for (let i=0; i<initialValues.length; i++) initialValues[i] = randomInt(0, 9);

    const [values, setValues] = useState(initialValues);
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
        newValues[id] = (newValues[id] + direc + 10) % 10;
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
                {locked ?
                    <Shackle className="shackle" style={{transform: 'translateY(155px)'}}/>
                    : 
                    <Shackle className="shackle" style={{transform: 'translateY(55px)'}}/>
                }
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