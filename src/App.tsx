import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styles from './styles/App.module.scss';
import Header from './components/Header';
import JoinLobby from './components/JoinLobby';
import Lobby from './components/Lobby';
import { LobbyState } from './type/LobbyState';

export const socket = io(process.env.REACT_APP_SOCKET_ENDPOINT ?? '');

const App = () => {
    const [lobbyState, setLobbyState] = useState<LobbyState | null>(null);

    useEffect(() => {
        socket.on('lobbyState', (lobbyState: LobbyState) => setLobbyState(lobbyState));
    }, []);

    return (
        <div className={styles.page}>
            <Header />
            {!lobbyState && <JoinLobby />}
            {lobbyState && <Lobby lobbyState={lobbyState} />}
        </div>
    );
};

export default App;
