export const addMarker = (marker) => {
    return {
        type: 'ADD',
        payload: marker
    };
};

export const changeMarker = (index, teksti) => {
    return {
        type: 'CHANGE_DATA',
        payload: {index: index, teksti: teksti}
    };
};