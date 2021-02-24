import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileConteiner}>
            <img src="https://github.com/MatheusPMC.png" alt="Matheus Prado" />
            <div>
                <strong>Matheus do Prado</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                    </p>
            </div>
        </div>
    );
}