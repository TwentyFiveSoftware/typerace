import React, { useEffect, useState } from 'react';
import { socket } from '../App';
import styles from '../styles/JoinLobby.module.scss';
import Container from './Container';
import InputBox from './InputBox';
import Button from './Button';

const JoinLobby = () => {
    const [username, setUsername] = useState<string>('');
    const [lobbyId, setLobbyId] = useState<string>('');

    const [incorrectUsername, setIncorrectUsername] = useState<boolean>(false);
    const [lobbyNotFound, setLobbyNotFound] = useState<boolean>(false);

    const submit = () => socket.emit('joinLobby', username, lobbyId);

    useEffect(() => {
        socket.on('errorIncorrectUsername', () => setIncorrectUsername(true));
        socket.on('errorLobbyNotFound', () => setLobbyNotFound(true));
    }, []);

    return (
        <div onKeyDown={e => (e.key === 'Enter' ? submit() : null)}>
            <Container>
                <InputBox
                    label={'USERNAME'}
                    value={username}
                    onChange={(v: string) => {
                        if (incorrectUsername) setIncorrectUsername(false);
                        setUsername(v);
                    }}
                    length={30}
                    error={incorrectUsername}
                />

                <InputBox
                    label={'LOBBY ID (EMPTY FOR NEW LOBBY)'}
                    value={lobbyId}
                    onChange={(v: string) => {
                        if (lobbyNotFound) setLobbyNotFound(false);
                        setLobbyId(v.toUpperCase());
                    }}
                    length={5}
                    error={lobbyNotFound}
                />

                <div className={styles.spacer} />

                <Button text={lobbyId.length === 0 ? 'CREATE LOBBY' : 'JOIN'} onClick={() => submit()} />
            </Container>
        </div>
    );
};

export default JoinLobby;
