import React from 'react';
import styles from './styles/App.module.scss';
import JoinLobby from './components/JoinLobby';
import Header from './components/Header';

const App = () => {
    return (
        <div className={styles.page}>
            <Header />
            <JoinLobby />
        </div>
    );
};

export default App;
