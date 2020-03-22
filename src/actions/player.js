export const SET_PLAYER = 'SET_PLAYER'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const setCurrentPlayer = player => ({
  type: SET_PLAYER,
  player
})

export const addItemToCart = photoId => ({
  type: ADD_ITEM_TO_CART,
  photoId
})

export const removeItemFromCart = photoId => ({
  type: REMOVE_ITEM_FROM_CART,
  photoId
})

export const clearCart = () => ({ type: CLEAR_CART })
