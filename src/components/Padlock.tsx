import React, { useState } from 'react';
import anime from 'animejs';

import './Padlock.scss';
import Digit from './Digit';
import Shackle from './Shackle';

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

    // Reference to itself so we can animate the padlock
    const ref = React.createRef<HTMLDivElement>();

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
    const validate = () => {
        const correct: boolean = isCorrect();
        if (correct) {
            // If they're right, toggle the locked state
            toggleLock();
        }
        else {
            // If they're wrong, show the incorrect animation (shaking the padlock)
            if (ref && ref.current) {
                anime({
                    targets: ref.current,
                    translateX: [
                        { value: '5px' },
                        { value: '-5px' },
                        { value: '5px' },
                        { value: '0px' }
                    ],
                    duration: 400,
                    autoplay: true,
                    easing: 'easeInOutSine'
                });
            }
        }
    }

    return (
        <div className="padlock-app">
            <div className="padlock" ref={ref}>
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