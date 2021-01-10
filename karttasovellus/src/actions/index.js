//Tässä tiedostossa kaikki actionit jolla laukaistaan haluttu toimenpide reduxissa

//Lisää markkerin
export const addMarker = (marker) => {
    return {
        type: 'ADD',
        payload: marker
    };
};
// Muuttaa markkerin dataa
export const changeMarker = (index, teksti) => {
    return {
        type: 'CHANGE_DATA',
        payload: {index: index, teksti: teksti}
    };
};
// Poistaa markkerin kokonaan
export const deleteMarker = (index) => {
    return {
        type: 'DELETE',
        payload: {index: index}
    };
};
//Lisää kuvan url:n markkerinín
export const addImage = (index, kuva) => {
    return {
        type: 'ADD_IMAGE',
        payload: {index: index, kuva: kuva}
    };
};
//poistaa kuvan kokonaan
export const deleteImage = (index) => {
    return {
        type: 'DELETE_IMAGE',
        payload: {index: index}
    };
};