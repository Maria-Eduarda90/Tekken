import { InputType } from '../../@types/InputType';
import styles from './styles.module.scss';

export function Input(props: InputType){
    return(
        <input
         type="text" 
         placeholder="Digite sua senha"
         className={styles.input}
         {...props}
        />
    );
}