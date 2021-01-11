import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfoInside from './InfoInside';
import { addMarker } from '../actions';

/* Tässä komponentissa luodaan google mapsi sivustolle.
Toiminnot: markkerin lisäys ja infoikkunan avaus.
*/

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


    // Funktio lisää uuden markkerin reduxin storeen. 
    const lisaamarker = useCallback((e) => {
        dispatch(addMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            data: "",
            kuva: null,
            index: null
        }));
        setSelected(null);
    }, []);

    //Funktio asettaa oikean markkerin valituksi. Tällä hallitaan sitä mikä infoikkua avataa
    const paivitaMarkeri = (marker) => {
        setSelected(null);
        setSelected(marker);
    }

    // Tämä mappaa reduxin storessa olevat asteet markereiksi kartalle
    const markerit = markers.map((marker, index) => {
        if (marker !== undefined) {
            marker.index = index; // asetetaan indexin markkerille
            return <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => { paivitaMarkeri(marker) }}
            />
        }
    });

    return (

        <LoadScript data-testid="loadScript"
            googleMapsApiKey="Api key here"
        >
            <GoogleMap
                onRightClick={(e) => { lisaamarker(e) }}
                onClick={() => { setSelected(null) }}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                {markerit}
                {// jos ei olla valittu markkeria niin infoikkuna ei näy missään. Info ikkuna avataa valitun markkerin kohdalle
                selected ? <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => { setSelected(null) }} >
                    <InfoInside index={selected.index} sulje={setSelected} />
                </InfoWindow> : null}
            </GoogleMap>
        </LoadScript>

    );
}

export default React.memo(MyMapComponent);


//https://maps.googleapis.com/maps/api/js?key=AIzaSyAym0Ix26G_GEl_37krCNNYZQFvTnqRVEM