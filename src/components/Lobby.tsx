import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Lobby.module.scss';
import Container from './Container';
import Button from './Button';
import LobbyUserItem from './LobbyUserItem';
import { LobbyState } from '../type/LobbyState';
import { socket } from '../App';
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

const Lobby: FunctionComponent<{ lobbyState: LobbyState }> = ({ lobbyState }) => {
    const myCarIndex = lobbyState.players.find(player => player.socketId === socket.id)?.carIndex ?? 0;

    return (
        <div className={styles.lobby}>
            <Container>
                <h1 className={styles.title}>LOBBY</h1>
                <p className={styles.subtitle}>
                    ID: <span>{lobbyState.lobbyId}</span>
                </p>
                <div className={styles.separator} />

                <ul className={styles.users}>
                    {lobbyState.players.map((player, index) => (
                        <LobbyUserItem username={player.username} isReady={player.isReady} key={index} />
                    ))}
                </ul>

                <div className={styles.separator} />
                <Button text={'READY'} onClick={() => socket.emit('toggleReady')} />
            </Container>

            <Container small={true}>
                <div className={styles.cars}>
                    {CAR_ICONS.map((icon, index) => (
                        <div
                            key={index}
                            className={index === myCarIndex ? styles.car__selected : styles.car}
                            onClick={() => socket.emit('switchCar', index)}
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
