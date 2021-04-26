import React from 'react';
import Anime from 'react-anime';

import './Padlock.scss';
import shackle from './shackle.svg';

interface ShackleProps {
    locked: boolean;
}

function Shackle(props: ShackleProps) {
    // const refer: React.LegacyRef<Anime> = React.createRef();

    return (
        <Anime 
            easing={props.locked ? "easeInBack" : "easeOutBack"}
            duration={400}
            loop={false}
            autoplay={true}
            translateY={props.locked ? "160px" : "40px"}
            // ref={refer}
        >
            <div><img src={shackle} alt="shackle" className="shackle"/></div>
        </Anime>
    )
}

export default Shackle;