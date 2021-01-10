import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Image } from 'react-bootstrap';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';


const kuvaKoko = {
    width: '300px',
    height: '290px'
};

function MerkkijonoListaSisalto() {
    // otetaan reduxin storesta markerit
    const markers = useSelector(state => state.markers);

    //Mäpätään sisältö Listaann
    const sisalto = markers.map((marker, index) => {

        if (marker !== undefined || marker.data !== "" || marker.kuva !== null ) {
            return <ListGroup.Item key={index}>
                {marker.data}
                {marker.kuva !== null ? // jos ei kuvaa ei sitä näytetä
                <Image className="pl-5" style={kuvaKoko} src={marker.kuva}/>: null}
                
            </ListGroup.Item>
        }
    });

    return (
        <ListGroup>
            {sisalto}
        </ListGroup>


    );
}

export default MerkkijonoListaSisalto;