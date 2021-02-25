import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styles from './styles/App.module.scss';
import Header from './components/Header';
import JoinLobby from './components/JoinLobby';
import Lobby from './components/Lobby';
import { LobbyState } from './type/LobbyState';
import Game from './components/Game';
import { GameState } from './type/GameState';

export const socket = io(process.env.REACT_APP_SOCKET_ENDPOINT ?? '');

const App = () => {
    const [lobbyState, setLobbyState] = useState<LobbyState | null>(null);
    const [gameState, setGameState] = useState<GameState | null>(null);

    useEffect(() => {
        socket.on('lobbyState', (lobbyState: LobbyState) => setLobbyState(lobbyState));
        socket.on('gameState', (gameState: GameState) => setGameState(gameState));
    }, []);

    console.log(gameState);

    return gameState ? (
        <div className={styles.page}>
            <Header />
            <Game gameState={gameState} />
        </div>
    ) : (
        <div className={styles.page}>
            <Header />
            {!lobbyState && <JoinLobby />}
            {lobbyState && <Lobby lobbyState={lobbyState} />}
        </div>
    );
};

export default App;
