import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import logo from '../../img/Tekken_Logo.png';

export function Home(){
    return(
        <div className={styles.container}>
            <img src={logo} alt="logo" />
            <form>
                <Input />
            </form>
        </div>
    );
}