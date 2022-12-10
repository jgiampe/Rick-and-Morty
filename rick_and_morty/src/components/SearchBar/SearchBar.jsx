import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState();

   var getId = (event)=>setId(event.target.value);
   
   return (
      <div className={styles.search}>
         <input type='search' placeholder='Inserte ID' onChange={getId}/>
         <button onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}
