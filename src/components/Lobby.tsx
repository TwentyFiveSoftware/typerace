import React, { FunctionComponent, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Lobby.module.scss';
import Container from './Container';
import Button from './Button';
import LobbyUserItem from './LobbyUserItem';
import { LobbyStateContext, socket } from '../App';
import { SocketRequestType } from '../type/SocketRequestType';
import {
    faBabyCarriage,
    faCaravan,
    faCarSide,
    faTractor,
    faTrailer,
    faTruck,
    faTruckMonster,
    faTruckMoving,
    faTruckPickup,
} from '@fortawesome/free-solid-svg-icons';

export const CAR_ICONS = [
    faCarSide,
    faTruckMoving,
    faTruck,
    faTruckPickup,
    faCaravan,
    faBabyCarriage,
    faTrailer,
    faTractor,
    faTruckMonster,
];

const Lobby: FunctionComponent = () => {
    const { lobbyId, players } = useContext(LobbyStateContext) ?? { lobbyId: '', players: [] };

    const myCarIndex = players.find(player => player.socketId === socket.id)?.carIndex ?? 0;

    return (
        <div className={styles.lobby}>
            <Container>
                <h1 className={styles.title}>LOBBY</h1>
                <p className={styles.subtitle}>
                    ID: <span>{lobbyId}</span>
                </p>
                <div className={styles.separator} />

                <ul className={styles.users}>
                    {players.map((player, index) => (
                        <LobbyUserItem username={player.username} isReady={player.isReady} key={index} />
                    ))}
                </ul>

                <div className={styles.separator} />
                <Button text={'READY'} onClick={() => socket.emit(SocketRequestType.LOBBY_TOGGLE_READY)} />
            </Container>

            <Container small={true}>
                <div className={styles.cars}>
                    {CAR_ICONS.map((icon, index) => (
                        <div
                            key={index}
                            className={index === myCarIndex ? styles.car__selected : styles.car}
                            onClick={() => socket.emit(SocketRequestType.LOBBY_SWITCH_CAR, index)}
                        >
                            <FontAwesomeIcon icon={icon} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Lobby;
