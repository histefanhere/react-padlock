import HappyPepe from './happypepe.png';
import SadPepe from './sadpepe.png';

import './pepe.scss';

interface PepeProps {
    visible: boolean,
    happy: boolean
}

function Pepe(props: PepeProps) {
    return (
        <div className="pepe">
            <img
                src={HappyPepe}
                alt="Happy Pepe"
                style={{
                    display: (props.visible && props.happy) ? "block" : "none"
                }}/>
            <img
                src={SadPepe}
                alt="SadPepe"
                style={{
                    display: (props.visible && (!props.happy)) ? "block" : "none"
                }}/>
        </div>
    );
}

export default Pepe;