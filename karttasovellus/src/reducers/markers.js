const markerReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':     
            return [...state, action.payload]
        case 'CHANGE_DATA':
                state[action.payload.index].data = action.payload.teksti;
            return [...state];
        case 'DELETE':
            state.splice(action.payload.index,1);
            return[...state];
        case 'ADD_IMAGE':
            state[action.payload.index].kuva = action.payload.kuva;
            console.log(state[action.payload.index].kuva);
            return [...state];
        case 'DELETE_IMAGE':
            state[action.payload.index].kuva = null;
            return [...state];
        default:
            return state;
    }
} 

export default markerReducer;
