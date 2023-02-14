import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import logo from '../../img/Tekken_Logo.png';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home(){
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    console.log(password)

    function handleSignIn(e: FormEvent){
        e.preventDefault();

        if (password === "Tekken123"){
            navigate('/characters');
        } else if (password !== "Tekken123"){
            alert("senha errada.")
        } else {
            navigate('/');
        }
    }

    return(
        <div className={styles.container}>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSignIn}>
                <Input onChange={e => setPassword(e.target.value)} value={password} />
            </form>
        </div>
    );
}