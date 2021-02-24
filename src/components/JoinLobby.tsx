import React, { useState } from 'react';
import Container from './Container';
import InputBox from './InputBox';
import Button from './Button';
import { socket } from '../App';

const JoinLobby = () => {
    const [username, setUsername] = useState<string>('');
    const [lobbyId, setLobbyId] = useState<string>('');

    const submit = () => socket.emit('joinLobby', username, lobbyId);

    return (
        <Container>
            <InputBox label={'USERNAME'} value={username} onChange={setUsername} />
            <InputBox label={'LOBBY ID (EMPTY FOR NEW LOBBY)'} value={lobbyId} onChange={setLobbyId} />
            <Button text={'JOIN'} onClick={() => submit()} />
        </Container>
    );
};

export default JoinLobby;
