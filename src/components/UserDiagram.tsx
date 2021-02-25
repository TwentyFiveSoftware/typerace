import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/UserDiagram.module.scss';

const UserDiagram: FunctionComponent<{ username: string; speed: number; progress: number; color: string }> = ({
    username,
    speed,
    progress,
    color
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.userInfoRow}>
                <p className={styles.lightText}>{username}</p>
                <div className={styles.userInfoRowSpacer}>
                    <p> · </p>
                </div>
                <p className={styles.lightText}>
                    {`${speed} `}
                    <span className={styles.lighterText}>K/min</span>
                </p>
            </div>
            <div className={styles.diagramContainer}>
                <div className={styles.diagramRoad}>
                    <div className={styles.useableRoad}>
                        <div style={{ marginLeft: `${progress * 100}%`, marginBottom: 10 }} className={styles.carBox}>
                            <FontAwesomeIcon icon={faCarSide} style={{color: color}} className={styles.carIcon} />
                        </div>
                    </div>
                </div>
                <div className={styles.diagramFlag}>
                    <FontAwesomeIcon
                        icon={faFlagCheckered}
                        style={{ color: progress === 1 ? color : '#505050' }}
                        className={styles.flagIcon}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserDiagram;
