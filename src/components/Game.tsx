import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import { GameStateContext, socket } from '../App';
import { SocketRequestType } from '../type/SocketRequestType';
import { SocketResponseType } from '../type/SocketResponseType';
import ProgressInfoContainer from './ProgressInfoContainer';
import Road from './Road';
import WinPopup from './WinPopup';

const PLAYER_COLORS = ['#74B9FF', '#83A868', '#FCAC6F', '#DF4A70', '#BE9CFC'];

const Game: FunctionComponent = () => {
    const [currentTextPosition, setCurrentTextPosition] = useState<number>(0);

    const gameState = useContext(GameStateContext);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (gameState?.text[currentTextPosition] === e.key) {
                setCurrentTextPosition(currentTextPosition + 1);
                socket.emit(SocketRequestType.GAME_UPDATE, currentTextPosition + 1);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        socket.on(SocketResponseType.GAME_RESTART, () => setCurrentTextPosition(0));

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [currentTextPosition, gameState?.text]);

    return (
        <div className={styles.game}>
            <div className={styles.playerSpace}>
                {gameState?.players.map((player, index) => (
                    <Road
                        key={index}
                        username={player.username}
                        speed={player.typingSpeed}
                        progress={Math.floor((player.currentTextPosition * 100) / gameState.text.length)}
                        color={PLAYER_COLORS[index % PLAYER_COLORS.length]}
                        carIndex={player.carIndex}
                    />
                ))}
            </div>

            <ProgressInfoContainer currentTextPosition={currentTextPosition} />

            {gameState?.isFinished && <WinPopup />}
        </div>
    );
};

export default Game;
