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

export const deleteMarker = (index) => {
    return {
        type: 'DELETE',
        payload: {index: index}
    };
};

export const addImage = (index, kuva) => {
    return {
        type: 'ADD_IMAGE',
        payload: {index: index, kuva: kuva}
    };
};

export const deleteImage = (index) => {
    return {
        type: 'DELETE_IMAGE',
        payload: {index: index}
    };
};