const ADD_FAVORITE = 'ADD_FAVORITE'
const DEL_FAVORITE = 'DEL_FAVORITE'
const FILTER = 'FILTER'
const ORDER = 'ORDER'


const addFavorite = (character) => ({type: ADD_FAVORITE, payload: character})

const delFavorite = (id) => ({type: DEL_FAVORITE, payload: id})

const filterCards = (status) => ({type: FILTER, payload: status})

const orderCards = (id) => ({type: ORDER, payload: id})

module.exports = {
    ADD_FAVORITE,
    DEL_FAVORITE,
    FILTER, 
    ORDER, 
    addFavorite, 
    delFavorite, 
    filterCards, 
    orderCards
}