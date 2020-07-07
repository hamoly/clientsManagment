import {CLIENTS_GET, CLIENT_NEW, CLIENT_UPDATE} from './'

export const getClients = data => {
    // use axios to get clients via api
    return dispatch => {
        dispatch({
            type: CLIENTS_GET,
            payload: data
        })
    }
}
export const newClient = newClientInfo => {
    // use axios to push new client via api
    return dispatch => {
        dispatch({
            type: CLIENT_NEW,
            payload: newClientInfo
        })
    }
}
export const updateClient = updatedClientInfo => {
    // use axios to update clients information and active statue via api
    return dispatch => {
        dispatch({
            type: CLIENT_UPDATE,
            payload: updatedClientInfo
        })
    }
}
