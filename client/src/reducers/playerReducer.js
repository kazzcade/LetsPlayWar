import cst from '../constants/cst'

const initialStates = {
    all: [],
    actives: []
}

const playerReducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.PLAYER_GET_ALL: {
            return Object.assign({}, state, {
                all: action.payload
            })
        }
        case cst.PLAYER_ADD_NEW: {
            let players = [...state.all]
            console.log("dealerReducer/PLAYER_ADD_NEW (before): " + JSON.stringify(players, null, 5))
            players.push(action.payload)
            console.log("dealerReducer/PLAYER_ADD_NEW (after): " + JSON.stringify(players, null, 5))
            return Object.assign({}, state, {
                all: [...players]
            })
        }
        case cst.PLAYER_SET_ACTIVE: {
            let actPlayer = [...state.actives]
            let newP = state.all.filter(p => p.id === action.payload ? p : null)
            if (newP.length > 0) actPlayer.push(newP[0])
            return Object.assign({}, state, {
                actives: [...actPlayer]
            })
        }
        default:
            return state;
    }
}

export default playerReducer