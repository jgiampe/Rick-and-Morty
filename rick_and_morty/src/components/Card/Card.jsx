import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { addFavorite, delFavorite } from '../../redux/actions.js';
import { connect } from "react-redux";
import { useState, useEffect } from 'react';

export function Card( { item, character, onClose, addFavorite, delFavorite, myFavorites } ) {
 
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = ()=>{
      if(isFav)
      {
         setIsFav(false);
         delFavorite(character.id);
      }
      else{
         setIsFav(true);
         addFavorite(character)
      }
   }

   return (
      <div className={styles.card}>
         {
            isFav ? (
               <button className={styles.fav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.fav} onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={styles.close}>
            <button onClick={()=>onClose(character.id)}>X</button>
         </div>
         
         <div className={styles.container}>
            <img  src={character.image} alt={character.name}/> 
            <Link to={`/detail/${character.id}`}>
               <h2 className={styles.onTop}>{character.name}</h2>
            </Link>
         </div>
         
         <div className={styles.desc}>
            <h2>{character.gender}</h2>
            <h2>{character.species}</h2>
         </div>

      </div>
   );
}

export function mapStateToProps (state)
{
   return {myFavorites: state.myFavorites}
}

export function mapDispatchToProps(dispatch)
{
   return bindActionCreators({addFavorite, delFavorite}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);