import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useCallback, useState, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import InfoInside from './InfoInside';
import {addMarker} from '../actions';

// Asetetaan kartan koko näytölle
const containerStyle = {
    width: '100%',
    height: '600px'
};

//Asetetaan kartta osoittamaan kuopioon
const center = {
    lat: 62.89238,
    lng: 27.67703
};

function MyMapComponent() {
    // Otetaan reduxin storesta state muuttuja käyttöön 
    const markers = useSelector(state => state.markers);
    const dispatch = useDispatch();

    //Valittu markkeri  
    const [selected, setSelected] = useState(null);
    const indexRef = useRef(0);


    // Funktio lisää uuden markkerin reduxin storeen
    const lisaamarker = useCallback((e) => {
        dispatch(addMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            data: "",
            index: indexRef.current
        }));
        indexRef.current++;
        setSelected(null);
    }, []);
    
    const paivitaMarkeri = (marker) => {
        setSelected(null);
        setSelected(marker)
    }
    
    // Tämä mappaa reduxin storessa olevat asteet markereiksi kartalle
    const markerit = markers.map((marker, index) => <Marker 
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }} 
        onClick={() => {paivitaMarkeri(marker)}}
        />);

    console.log(selected);
    return (

        <LoadScript
            googleMapsApiKey="AIzaSyAym0Ix26G_GEl_37krCNNYZQFvTnqRVEM"
        >
            <GoogleMap
                onRightClick={(e) => {lisaamarker(e)}}
                onClick={() => {setSelected(null)}}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                {markerit}
                {selected ? <InfoWindow 
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {setSelected(null)}} >
                    <InfoInside index={selected.index}/> 
                </InfoWindow>: null}
            </GoogleMap>
        </LoadScript>

    );
}

export default React.memo(MyMapComponent);


//https://maps.googleapis.com/maps/api/js?key=AIzaSyAym0Ix26G_GEl_37krCNNYZQFvTnqRVEM