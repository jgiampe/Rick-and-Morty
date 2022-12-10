import { ADD_FAVORITE, DEL_FAVORITE, FILTER, ORDER } from "./actions.js";


const initialState = {
    myFavorites: [],
    allCharacters: []
  }

const rootReducer = (state= initialState, {type, payload})=>{
    let all = [], fav = [];

    switch (type) {
        case ADD_FAVORITE:
            all = [...state.allCharacters];
            if(!state.allCharacters.find(el=>el.id===payload.id))
                all.push(payload);
            return {...state, allCharacters: all}
        
        case DEL_FAVORITE:
            if(payload === 'ALL')
            {
                return {...state, myFavorites: [], allCharacters: []}
            }
            fav = [...state.myFavorites].filter(el=>el.id!==payload);
            all = [...state.allCharacters].filter(el=>el.id!==payload);
            return {...state, myFavorites: fav, allCharacters:all}

        case FILTER:
            if(payload==='ALL')
                fav = [...state.allCharacters]
            else
                fav = [...state.allCharacters].filter(el=>el.gender===payload);
            return {...state, myFavorites: fav}

        case ORDER:
            fav = [...state.myFavorites].sort((a,b)=>{
                if(payload==='Ascendente')
                    if(a>b) return 1
                    else    return -1
                if(payload==='Descendente')
                    if(a<b) return 1
                    else    return -1 
            })
            return {...state, myFavorites: fav}
        
        default:
            return state;
    }

}

export default rootReducer
