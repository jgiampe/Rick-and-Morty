import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './Detail.module.css'

export default function Detail()
{
    const {id} = useParams();
    const [character, setCharacter] = useState({
       created:'',
       episode:[],
       gender:'',
       id:0,
       image:'',
       location:{name:'', url:''},
       name:'',
       origin:{name:'', url:''},
       species:'',
       status:'',
       type:'',
       url:''
      })
      
      
      useEffect(() => {
         fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
         return setCharacter({});
      }, [id]);
      
      const navigate = useNavigate();
      const goBack = ()=>navigate(-1);

      return (
         <div className={styles.Detail}>
            <button onClick={goBack}>&larr;Volver</button>
            <div className={styles.content}>
               <div>
                  <h1>{character.name}</h1>
                  <h2>Estado: {character.status}</h2>
                  <h2>Especies: {character.species}</h2>
                  <h2>Género: {character.gender}</h2>
                  <h2>Origen: {character.origin?.name}</h2>
               </div>
               <img src={character.image} alt={character.name} />
            </div>
         </div>
         )
}