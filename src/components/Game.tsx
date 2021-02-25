import React, { useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import ProgressInfoContainer from './ProgressInfoContainer';
import { ProgressInfo } from '../type/ProgressInfo';
import UserDiagram from './UserDiagram';

const Game = () => {
    const progressInfo: ProgressInfo = {
        text:
            'Space Exploration Technologies Corp. (SpaceX) is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.',
        currentTextPosition: 0,
        timePassed: 5,
        typingSpeed: 123,
    };

    const [currentTextPosition, setCurrentTextPosition] = useState<number>(0);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (progressInfo.text[currentTextPosition] === e.key) {
                setCurrentTextPosition(currentTextPosition + 1);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [currentTextPosition, progressInfo.text]);

    return (
        <div className={styles.game}>
            <div className={styles.playerSpace}>
                <UserDiagram username={'Gunther'} speed={300} progress={1} color={'#63A8FE'} />
                <UserDiagram username={'Peter'} speed={600} progress={0.3} color={'#83A868'} />
            </div>

            <div className={styles.progressInfoSpace}>
                <ProgressInfoContainer {...progressInfo} currentTextPosition={currentTextPosition} />
            </div>
        </div>
    );
};

export default Game;
