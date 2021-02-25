import React from 'react';
import styles from '../styles/Game.module.scss';
import UserDiagram from './UserDiagram';

const Game = () => {
    return (
        <div className={styles.game}>
            <div className={styles.playerSpace}>
                <UserDiagram username="Gunther" speed={300} progress={.0} color="#63A8FE"/>
                <UserDiagram username="Peter" speed={600} progress={.3} color="#83A868"/>
            </div>
            <div className={styles.inputSpace}></div>
        </div>
    );
};

export default Game;
