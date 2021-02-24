import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/LobbyUserItem.module.scss';

const LobbyUserItem: FunctionComponent<{ username: string; isReady: boolean }> = ({ username, isReady }) => {
    return (
        <div className={isReady ? styles.container__ready : styles.container}>
            <p className={styles.username}>{username}</p>
            {isReady && <FontAwesomeIcon icon={faCheckCircle} className={styles.readyIcon} />}
        </div>
    );
};

export default LobbyUserItem;
