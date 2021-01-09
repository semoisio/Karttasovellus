import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import {  useSelector } from 'react-redux';
import MerkkijonoListaSisalto from './MerkkijonoListaSisalto';

function MerkkijonoLista() {
    const markers = useSelector(state => state.markers);


    return (
        <Container fluid className="p-0">
            {markers.length === 0 ?
            <h2>EI vielä yhtään merkkijonoa tallennettuna</h2>: <MerkkijonoListaSisalto/>}
            
        </Container>

    );
}

export default MerkkijonoLista;