import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import { GameState } from '../type/GameState';
import { socket } from '../App';
import ProgressInfoContainer from './ProgressInfoContainer';
import Road from './Road';
import WinPopup from './WinPopup';

const PLAYER_COLORS = ['#74B9FF', '#83A868', '#FCAC6F', '#DF4A70', '#BE9CFC'];

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

        socket.on('restart', () => setCurrentTextPosition(0));

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [currentTextPosition, gameState.text]);

    return (
        <div className={styles.game}>
            <div className={styles.playerSpace}>
                {gameState.players.map((player, index) => (
                    <Road
                        key={index}
                        username={player.username}
                        speed={player.typingSpeed}
                        progress={Math.floor((player.currentTextPosition * 100) / gameState.text.length)}
                        color={PLAYER_COLORS[index % PLAYER_COLORS.length]}
                    />
                ))}
            </div>

            <div>
                <ProgressInfoContainer currentTextPosition={currentTextPosition} gameState={gameState} />
            </div>

            {gameState.isFinished && <WinPopup gameState={gameState} />}
        </div>
    );
};

export default Game;
