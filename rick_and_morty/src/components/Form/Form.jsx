import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {validateUser, validatePass} from './validation.js'
import styles from './Form.module.css'

const LOGIN_IMG = 'https://media.cdn.adultswim.com/uploads/20220904/2294143541-RAMMobileHero.png'

export default function Form({login})
{
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({username:'', password:''});
    
    
    var handleInputChange = (ev)=>{
        
        setUserData({
          ...userData,
          [ev.target.name]: ev.target.value
        })

        ev.target.name === 'username' && setErrors(
            {...errors,
            username: validateUser(ev.target.value)})
    
        ev.target.name === 'password' && setErrors(
            {...errors,
            password: validatePass(ev.target.value)})

        
    }


    const handleSubmit = (ev)=>{
        ev.preventDefault();
        login(userData);
    }
     

    return(
        <div className={ styles.form }>
            <img src={LOGIN_IMG} alt="LOGIN_IMG" />
            <form className={styles.login} onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        name="username" 
                        value={userData.username} 
                        placeholder="Inserte usuario" 
                        type="text"
                        onChange={handleInputChange} />
                    {errors.username && <p className={styles.errors}>{errors.username}</p>}
                </div>

                <div>
                    <label>Password</label>
                    <input 
                        name="password" 
                        value={userData.password} 
                        placeholder="Inserte contraseña" 
                        type="password" 
                        onChange={handleInputChange}/>
                    {errors.password && <p className={styles.errors}>{errors.password}</p>}
                </div>
                <br/>
                <div>
                <button className={styles.submit} type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    )
}