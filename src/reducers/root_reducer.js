import { combineReducers } from 'redux'

import playerReducer from './player_reducer'

const rootReducer = combineReducers({
  playerState: playerReducer
})
export default rootReducer
