import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Image } from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';

// Tässä tiedostossa luon listan johon laitan esille tallennetut merkkijonot ja kuvat

const kuvaKoko = {
    width: '300px',
    height: '290px'
};

function MerkkijonoListaSisalto() {
    // otetaan reduxin storesta markerit
    const markers = useSelector(state => state.markers);

    //Mäpätään sisältö Listaann. Jos ei ole tallennettu markkereihin mitän silloin ei näytetä mitään
    const sisalto = markers.map((marker, index) => {
        
        if (marker !== undefined && marker.data !== "" || marker.kuva !== null ) {
            return <ListGroup.Item key={index}>
                {marker.data}
                {marker.kuva !== null ? // jos ei kuvaa ei sitä näytetä
                <Image className="pl-5" style={kuvaKoko} src={URL.createObjectURL(marker.kuva)}/>: null}
                
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