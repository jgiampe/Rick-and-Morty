import styles from './About.module.css'
import CREATOR from './Reggie.png'
// const CREATOR = './Reggie.png';

export default function About()
{

    return(
        <div className={styles.About}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Creador:&emsp;Julián Giampetruzzi</h1>
                    <p>Esta aplicación permite buscar personajes por ID,
                        o de forma aleatoria, y mostrar la información de estos en forma de cartas.
                        Estas pueden ser cerradas de a una o todas juntas.
                    </p>
                </div>
                <img src={CREATOR}/>
            </div>
        </div>
    )
}