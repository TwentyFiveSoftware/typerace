import React from 'react';
import { io } from 'socket.io-client';
import styles from './styles/App.module.scss';
import Header from './components/Header';
import JoinLobby from './components/JoinLobby';
// import Lobby from './components/Lobby';

export const socket = io(process.env.REACT_APP_SOCKET_ENDPOINT ?? '');

const App = () => {
    return (
        <div className={styles.page}>
            <Header />
            <JoinLobby />
            {/*<Lobby />*/}
        </div>
    );
};

export default App;
