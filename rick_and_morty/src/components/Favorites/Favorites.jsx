import { connect, useDispatch } from "react-redux"
import styles from './Favorites.module.css'
import Cards from '../Cards/Cards.jsx'
import { orderCards, filterCards } from "../../redux/actions"
import { useEffect } from "react"

export function Favorites({myFavorites})
{

    
    useEffect(()=>{
        dispatch(orderCards('Ascendente'));
        dispatch(filterCards('ALL'));
    },[])


    const dispatch = useDispatch()
    return (
        <div className={styles.fav}>
            <div className={styles.filters}>
                <label for='Orden'>Orden</label>
                <select name="Orden" id="Orden" onChange={(ev)=>dispatch(orderCards(ev.target.value))}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <tab/><tab/>
                <label for="Género">Género</label>
                <select name="Género" id="Género" onChange={(ev)=>dispatch(filterCards(ev.target.value))}>
                    <option value="ALL">ALL</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Gendereless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>

            <Cards characters={myFavorites} />
        </div>
        )
}


export function mapStateToProps (state){
   return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites)