import React, { useState } from 'react';
import Container from './Container';
import InputBox from './InputBox';
import Button from './Button';
import { socket } from '../App';
import styles from '../styles/JoinLobby.module.scss';

const JoinLobby = () => {
    const [username, setUsername] = useState<string>('');
    const [lobbyId, setLobbyId] = useState<string>('');
    const [lobbyNotFound, setLobbyNotFound] = useState<boolean>(false);

    const submit = () => socket.emit('joinLobby', username, lobbyId);

    socket.on('lobbyNotFound', () => setLobbyNotFound(true));

    return (
        <Container>
            <InputBox label={'USERNAME'} value={username} onChange={setUsername} />
            <InputBox label={'LOBBY ID (EMPTY FOR NEW LOBBY)'} value={lobbyId} onChange={setLobbyId} />
            {lobbyNotFound && <p className={styles.lobbyNotFoundLabel}>Lobby Not Found</p>}
            <Button text={'JOIN'} onClick={() => submit()} />
        </Container>
    );
};

export default JoinLobby;
