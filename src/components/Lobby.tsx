import React, { FunctionComponent } from 'react';
import styles from '../styles/Lobby.module.scss';
import Container from './Container';
import Button from './Button';
import LobbyUserItem from './LobbyUserItem';
import { LobbyState } from '../type/LobbyState';
import { socket } from '../App';

const Lobby: FunctionComponent<{ lobbyState: LobbyState }> = ({ lobbyState }) => {
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
        </div>
    );
};

export default Lobby;
