import React from 'react';
import styles from '../styles/LobbyUserItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    username: string;
    isReady: boolean;
}

const LobbyUserItem: React.FC<Props> = ({ username, isReady }: Props) => {
    return (
        <div className={`${styles.container} ${isReady ? styles.container__ready : ''}`}>
            <p className={styles.username}>{username}</p>
            {isReady && <FontAwesomeIcon icon={faCheckCircle} className={styles.readyIcon} />}
        </div>
    );
};

export default LobbyUserItem;
