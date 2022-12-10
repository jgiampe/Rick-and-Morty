import Card from '../Card/Card.jsx';

import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
   <div className={styles.unorderedList}>
      {characters.map((elemento,item)=>(
         <Card 
            key={item}
            item={item}
            character={elemento} 
            onClose={onClose}
         />))}
   </div>);
}
