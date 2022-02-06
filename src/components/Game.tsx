import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import { GameStateContext, socket } from '../App';
import { SocketRequestType } from '../type/SocketRequestType';
import ProgressInfoContainer from './ProgressInfoContainer';
import Road from './Road';
import WinInfo from './WinInfo';

const PLAYER_COLORS = ['#74B9FF', '#83A868', '#FCAC6F', '#DF4A70', '#BE9CFC'];

const Game: React.FC = () => {
    const gameState = useContext(GameStateContext);

    const [currentTextPosition, setCurrentTextPosition] = useState<number>(0);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (gameState?.text[currentTextPosition] === e.key) {
                setCurrentTextPosition(currentTextPosition + 1);
                socket.emit(SocketRequestType.GAME_UPDATE, currentTextPosition + 1);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [currentTextPosition, gameState?.text]);

    return (
        <main className={styles.game}>
            <div className={styles.playerSpace}>
                {gameState?.players.map((player, index) => (
                    <Road
                        key={player.socketId}
                        username={player.username}
                        speed={player.typingSpeed}
                        progress={Math.floor((player.currentTextPosition * 100) / gameState.text.length)}
                        color={PLAYER_COLORS[index % PLAYER_COLORS.length]}
                        carIndex={player.carIndex}
                    />
                ))}
            </div>

            <div className={styles.typingSpace}>
                <ProgressInfoContainer currentTextPosition={currentTextPosition} />
            </div>

            {gameState?.isFinished && <WinInfo />}
        </main>
    );
};

export default Game;
