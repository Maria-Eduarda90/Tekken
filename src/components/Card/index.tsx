import styles from './styles.module.scss';

type CardType = {
    avatar: string;
    characteristics: {
        name: string;
    }
    onClick: () => void;
}

export function Card({ avatar, characteristics, ...props }: CardType){
    return(
        <div className={styles.card} {...props}>
            <div className={styles.wrapper}>
                <img src={avatar} alt={characteristics.name} />
            </div>
        </div>
    );
}