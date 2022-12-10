import React,{useState, useEffect} from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import './App.css'
import Cards      from  './components/Cards/Cards.jsx'
import Nav        from  './components/Nav/Nav.jsx'
import About      from  './components/About/About.jsx'
import Detail     from  './components/Detail/Detail.jsx'
import Error      from  './components/Error/Error.jsx'
import Form       from  './components/Form/Form.jsx'
import Favorites  from  './components/Favorites/Favorites.jsx'
import { connect } from 'react-redux'
import { delFavorite } from './redux/actions.js'
import { bindActionCreators } from 'redux'


// import others,{Rick} from './data.js'
// others.unshift(Rick);

// const example = {
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };
export function App ({delFavorite}) {

  // const [characters, setCharacters] = useState([others])
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const [username, password] = ['ejemplo@gmail.com', '1password']
 
  var login = (userData)=>
  {
    if(userData.username === username && userData.password === password)
      {
        setAccess(true);
        navigate('/home')
      }
  }

  var logout = ()=>{
    setAccess(false);
  }
  
  var onClose = (id)=>{
    setCharacters(characters.filter((element)=>element.id!==id))
    delFavorite(id)
  };

  var random = ()=>{
    let id = Math.round(Math.random() * (826 - 1) + 1);
    onSearch(id)
  };

  var remove = ()=>{
    setCharacters([]);
    delFavorite('ALL')
  };
  
  var onSearch = (id)=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
            if(!characters.find(el=>el.id===id))
              setCharacters((oldChars) => [...oldChars, data]);
            else
              window.alert('Ya se encontraba agregado el personaje con ese ID');  
          } 
          else {
            window.alert('No hay personajes con ese ID');
         }
      });

  };  

  useEffect(() => {
    !access && navigate('/');
    }, [access]);
 
  return (
    <div  className='App'>
      
      <Nav onSearch={onSearch} random={random} remove={remove} logout={logout}/>
      
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/> 
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path="/" element={<Form login={login}/>}/>
      </Routes>
    </div>
  )
}




export function mapDispatchToProps(dispatch){
  return bindActionCreators({delFavorite},dispatch)
}

export default connect(null, mapDispatchToProps)(App)