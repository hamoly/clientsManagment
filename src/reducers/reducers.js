import {CLIENTS_GET, CLIENT_NEW, CLIENT_UPDATE} from '../actions'

const clientsReducer = (state = {}, action) => {
    switch (action.type) {
        case CLIENTS_GET:
            return action.payload
        case CLIENT_NEW:
            
            return action.payload
        case CLIENT_UPDATE:
            
            return action.payload
        default:
           return state
    }

}

export default clientsReducer;
