import React from 'react';
import styles from '../styles/Lobby.module.scss';
import Container from './Container';
import Button from './Button';
import LobbyUserItem from './LobbyUserItem';

const Lobby = () => {
    return (
        <div className={styles.lobby}>
            <Container>
                <h1 className={styles.title}>LOBBY</h1>
                <p className={styles.subtitle}>
                    ID: <span>XXXXX</span>
                </p>
                <div className={styles.separator} />

                <ul className={styles.users}>
                    <LobbyUserItem username={'TwentyFive'} isReady={true} />
                    <LobbyUserItem username={'User 2'} isReady={false} />
                </ul>

                <div className={styles.separator} />
                <Button text={'READY'} onClick={() => {}} />
            </Container>
        </div>
    );
};

export default Lobby;
