import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styles from './styles/App.module.scss';
import type { LobbyState } from './type/LobbyState';
import type { GameState } from './type/GameState';
import { SocketResponseType } from './type/SocketResponseType';
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
        socket.on(SocketResponseType.LOBBY_UPDATE, (lobbyState: LobbyState) => setLobbyState(lobbyState));
        socket.on(SocketResponseType.GAME_UPDATE, (gameState: GameState) => setGameState(gameState));
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
