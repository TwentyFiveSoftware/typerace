import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Road.module.scss';
import { CAR_ICONS } from './Lobby';

const Road: FunctionComponent<{
    username: string;
    speed: number;
    progress: number;
    color: string;
    carIndex: number;
}> = ({ username, speed, progress, color, carIndex }) => {
    return (
        <section className={styles.container}>
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
            <div className={styles.roadContainer}>
                <div className={styles.road}>
                    <div className={styles.useableRoad}>
                        <div style={{ marginLeft: `${progress}%`, marginBottom: 10 }} className={styles.carBox}>
                            <FontAwesomeIcon
                                icon={CAR_ICONS[carIndex]}
                                style={{ color: color }}
                                className={styles.carIcon}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faFlagCheckered}
                        style={{ color: progress === 100 ? color : '#505050' }}
                        className={styles.flagIcon}
                    />
                </div>
            </div>
        </section>
    );
};

export default Road;
