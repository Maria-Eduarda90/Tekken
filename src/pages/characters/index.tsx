import styles from './styles.module.scss';
import { Card } from '../../components/Card';
import { characters } from '../../mock/db';
import { useState } from 'react';
import { CharactersType } from '../../@types/CharactersType';

export function Characters(){
    const [character, setCharacter] = useState<CharactersType>();

    function clickOnTheCharacter(id: string){
        const tekkenCharacters = characters.find(c => c.id === id);
        setCharacter(tekkenCharacters);
    }

    return(
        <main>
            <section className={styles.characters}>
                <div className={styles.avatar}>
                    {characters.map(character => {
                        return (
                            <Card
                                key={character.id}
                                avatar={character.avatar}
                                characteristics={character.characteristics}
                                onClick={() => clickOnTheCharacter(character.id)}
                            />
                        );
                    })}
                </div>
            </section>
            <div className={styles.wrapper}>
                <img src={character?.characteristics.image} alt={character?.characteristics.name} />
                <div className={styles.containerDescription}>
                    <h1>{character?.characteristics.name}</h1>
                    <p>{character?.characteristics.description}</p>
                </div>
            </div>

        </main>
    );
}
