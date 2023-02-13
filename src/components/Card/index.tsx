import styles from './styles.module.scss';

type CardType = {
    avatar: string;
    characteristics: {
        name: string;
    }
}

export function Card({ avatar, characteristics }: CardType){
    return(
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <img src={avatar} alt={characteristics.name} />
            </div>
        </div>
    );
}