const markerReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':     
            return [...state, action.payload]
        case 'CHANGE_DATA':
                state[action.payload.index].data = action.payload.teksti;
            return state;
        default:
            return state;
    }
} 

export default markerReducer;
