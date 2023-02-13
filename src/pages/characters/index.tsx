import styles from './styles.module.scss';
import { Card } from '../../components/Card';
import { characters } from '../../mock/db';

export function Characters(){
    return(
        <section className={styles.characters}>
            <div className={styles.avatar}>
                {characters.map(character => {
                    return (
                        <Card
                            key={character.id}
                            avatar={character.avatar}
                            characteristics={character.characteristics}
                        />
                    );
                })}
            </div>

            <div>
                <h1>Hello</h1>
            </div>
        </section>
    );
}