import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styles from './styles/App.module.scss';
import { LobbyState } from './type/LobbyState';
import { GameState } from './type/GameState';
import Header from './components/Header';
import JoinLobby from './components/JoinLobby';
import Lobby from './components/Lobby';
import Game from './components/Game';

export const socket = io(process.env.REACT_APP_SOCKET_ENDPOINT ?? '');

export const GameStateContext = createContext<GameState | null>(null);
export const LobbyStateContext = createContext<LobbyState | null>(null);

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

            <GameStateContext.Provider value={gameState}>
                <Game />
            </GameStateContext.Provider>
        </div>
    ) : (
        <div className={styles.page}>
            <Header />
            {!lobbyState && <JoinLobby />}
            {lobbyState && (
                <LobbyStateContext.Provider value={lobbyState}>
                    <Lobby />
                </LobbyStateContext.Provider>
            )}
        </div>
    );
};

export default App;
