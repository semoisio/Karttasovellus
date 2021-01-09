import 'bootstrap/dist/css/bootstrap.min.css';
import {  ListGroup } from 'react-bootstrap';
import React, { useCallback, useState } from 'react';
import {  useSelector } from 'react-redux';


function MerkkijonoListaSisalto() {
    const markers = useSelector(state => state.markers);

    const sisalto = markers.map((marker, index) => {
        if (marker.data !== "") {
            return <ListGroup.Item key={index}>{marker.data}</ListGroup.Item>
        }
        else{
            return <ListGroup.Item key={index}>Ei vielä dataa tässä</ListGroup.Item>
        }
    });

    return (
        <ListGroup>
            {sisalto}
        </ListGroup>


    );
}

export default MerkkijonoListaSisalto;