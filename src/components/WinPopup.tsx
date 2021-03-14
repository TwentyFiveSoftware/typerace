import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/WinPopup.module.scss';
import Button from './Button';
import { GameState } from '../type/GameState';
import { socket } from '../App';

const WinPopup: FunctionComponent<{ gameState: GameState }> = ({ gameState }) => {
    const { players } = gameState;
    const ranking = players.sort((a, b) => (a.finishTime > b.finishTime ? 1 : -1));

    if (ranking.length === 0) return <></>;

    return (
        <>
            <div className={styles.overlay} />

            <div className={styles.container}>
                <div className={styles.top}>
                    <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
                    <div className={styles.winnerName}>{ranking[0].username}</div>
                    <div className={styles.winnerSubtitle}>WON THE GAME</div>
                </div>
                <div className={styles.divider} />
                <table className={styles.mid}>
                    {ranking.map((player, index) => (
                        <tr className={styles.playerInfo} key={index}>
                            <td className={styles.playerRank}>#{index + 1}</td>
                            <td className={styles.playerName}>{player.username}</td>
                            <td className={styles.alignRight}>
                                {Math.floor((player.finishTime - gameState.gameStartTime) / 1000)}
                                <span className={styles.textLight}>s</span>
                            </td>
                            <td className={styles.alignRight}>
                                {player.typingSpeed} <span className={styles.textLight}>K/min</span>
                            </td>
                            {ranking.some(p => p.playAgain) && (
                                <td>
                                    {player.playAgain && (
                                        <FontAwesomeIcon icon={faUndoAlt} className={styles.wantsReplayIcon} />
                                    )}
                                </td>
                            )}
                        </tr>
                    ))}
                </table>
                <div className={styles.bottom}>
                    <Button text={'PLAY AGAIN'} small={true} onClick={() => socket.emit('togglePlayAgain')} />
                </div>
            </div>
        </>
    );
};

export default WinPopup;
