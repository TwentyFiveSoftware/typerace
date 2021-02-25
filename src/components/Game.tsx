import React from 'react';
import styles from '../styles/Game.module.scss';

const Game = () => {
    return (
        <div className={styles.game}>
            <div className={styles.playerSpace}></div>
            <div className={styles.inputSpace}></div>
        </div>
    );
};

export default Game;
