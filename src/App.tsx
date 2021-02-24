import React from 'react';
import styles from './styles/App.module.scss';
import JoinLobby from './components/JoinLobby';
import Header from './components/Header';
import Lobby from './components/Lobby';

const App = () => {
    return (
        <div className={styles.page}>
            <Header />
            {/*<JoinLobby />*/}
            <Lobby />
        </div>
    );
};

export default App;
