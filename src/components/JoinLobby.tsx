import React, { useEffect, useState } from 'react';
import { socket } from '../App';
import styles from '../styles/JoinLobby.module.scss';
import { SocketRequestType } from '../type/SocketRequestType';
import { SocketResponseType } from '../type/SocketResponseType';
import Container from './Container';
import InputBox from './InputBox';
import Button from './Button';

const JoinLobby: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [lobbyId, setLobbyId] = useState<string>('');

    const [incorrectUsername, setIncorrectUsername] = useState<boolean>(false);
    const [lobbyNotFound, setLobbyNotFound] = useState<boolean>(false);

    const submit = () => socket.emit(SocketRequestType.LOBBY_JOIN, username, lobbyId);

    useEffect(() => {
        socket.on(SocketResponseType.LOBBY_ERROR_INCORRECT_USERNAME, () => setIncorrectUsername(true));
        socket.on(SocketResponseType.LOBBY_ERROR_NOT_FOUND, () => setLobbyNotFound(true));
    }, []);

    return (
        <div onKeyDown={e => e.key === 'Enter' && submit()}>
            <Container>
                <InputBox
                    label={'USERNAME'}
                    value={username}
                    onChange={(v: string) => {
                        if (incorrectUsername) setIncorrectUsername(false);
                        setUsername(v);
                    }}
                    autoFocus={true}
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
