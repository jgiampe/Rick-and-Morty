import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'

export default function Nav({onSearch, random, remove, logout}){
    const location = useLocation();
    
    if(location.pathname!=='/')
        return (
            <div className={styles.Nav}>
                <NavLink className={styles.navlink} to={'/home'}>
                    Home
                </NavLink> 

                <NavLink className={styles.navlink} to={'/favorites'}>
                    Favorites
                </NavLink>
                
                <NavLink className={styles.navlink} to={'/about'}>
                    About?
                </NavLink>

                <tab/><tab/><tab/><tab/>
                <SearchBar onSearch={onSearch}/>

                <button 
                    className={styles.random} 
                    onClick={random}
                >
                Random Character
                </button>

                <button 
                    className={styles.remove} 
                    onClick={remove}
                >
                Remove All
                </button>
                <tab/><tab/><tab/><tab/>
                <button className={styles.logout} onClick={logout}>LOGOUT</button>
            </div>
        )
}