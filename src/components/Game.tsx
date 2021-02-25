import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import ProgressInfoContainer from './ProgressInfoContainer';
import UserDiagram from './UserDiagram';
import { GameState } from '../type/GameState';
import { socket } from '../App';

const Game: FunctionComponent<{ gameState: GameState }> = ({ gameState }) => {
    const [currentTextPosition, setCurrentTextPosition] = useState<number>(0);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (gameState.text[currentTextPosition] === e.key) {
                setCurrentTextPosition(currentTextPosition + 1);
                socket.emit('gameUpdate', currentTextPosition + 1);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [currentTextPosition, gameState.text]);

    return (
        <div className={styles.game}>
            <div className={styles.playerSpace}>
                {gameState.players.map((player, index) => (
                    <UserDiagram
                        key={index}
                        username={player.username}
                        speed={player.typingSpeed}
                        progress={Math.floor((player.currentTextPosition * 100) / gameState.text.length)}
                        color={'#63A8FE'}
                    />
                ))}
            </div>

            <div className={styles.progressInfoSpace}>
                <ProgressInfoContainer currentTextPosition={currentTextPosition} gameState={gameState} />
            </div>
        </div>
    );
};

export default Game;
