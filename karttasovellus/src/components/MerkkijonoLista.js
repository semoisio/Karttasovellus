import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import {  useSelector } from 'react-redux';
import MerkkijonoListaSisalto from './MerkkijonoListaSisalto';

//Tässä teen tarkistukset näytetäänkö listassa vielä mitään. 

function MerkkijonoLista() {
    //Otetaan markkeri taulukko reduxista
    const markers = useSelector(state => state.markers);
    
    // Jos taulussa ei ole dataa ei näytetä mitään
    const tarkastaData = () => {
        return markers.filter((marker) => {
            if (marker !== undefined){
                //Jos tekstiä tai kuvia ei ole markkerissa silloin ei näytetä vielä mitään.
                return marker.data !== "" || marker.kuva !== null;
            }
        })
    }

    return (
        <Container fluid className="p-0">
            {markers.length === 0 || tarkastaData().length === 0 ?
            <h2>Ei vielä yhtään merkkijonoa tallennettuna</h2>: <MerkkijonoListaSisalto/>}  
        </Container>

    );
}

export default MerkkijonoLista;