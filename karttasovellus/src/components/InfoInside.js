import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useCallback, useState } from 'react';
import {changeMarker} from '../actions';
import {useDispatch, useSelector} from 'react-redux';


function Info(props) {

    const markers = useSelector(state => state.markers);
    
    const [teksti,setTeksti] = useState(markers[props.index].data);
    const[tallenna, setTallenna] = useState(true);

    const dispatch = useDispatch();

    const tekstiMuuttunut = (e) => {
        setTeksti(e.target.value)
        if(tallenna === true){
            setTallenna(false);
        }
    }


    return (
        <Container fluid className="p-0">
            <Form>
                <Form.Group>
                    <Form.Label>Voit lisätä tekstiä</Form.Label>
                    <Form.Control as="textarea" rows={3} value={teksti} onChange={(e) => {tekstiMuuttunut(e) }}/>
                </Form.Group>
                <Button disabled={tallenna} variant="primary" onClick={() => {dispatch(changeMarker(props.index, teksti));}}>Tallenna</Button>
            </Form>
        </Container>

    );
}

export default Info;