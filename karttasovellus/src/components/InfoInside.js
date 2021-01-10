import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Image, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { changeMarker, deleteMarker, addImage, deleteImage } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import ImageUploader from 'react-images-upload';

//Tässä tiedostossa muodostan markkerin info ikkunan sisällön ja kaikki toiminnot siihen liittyen. 

//kuvan koko määritellään tässä
const kuvaKoko = {
    width: '150px',
    height: '140px'
};

function Info(props) {
    // Data käyttöön reduxista
    const markers = useSelector(state => state.markers);

    // Tällä dispatherilla muokataan dataa
    const dispatch = useDispatch();

    // tässä tarkastetaan disabloidaanko muokkaa nappi aluksi vai ei
    const tarkastaMuokkaa = () => {
        if (markers[props.index].data !== "") {
            return true;
        }
        else {
            return false;
        }
    }
// tässä tarkastetaan disabloidaanko poista kuva nappi aluksi vai ei
    const tarkastaMuokkaaKuva = () => {
        if (markers[props.index].kuva !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    // Näissä useState muuttujissa pidän yllä tietia muokkaa ja poista kuva nappien disaploinnista
    const [muokkaa, setMuokkaa] = useState(tarkastaMuokkaa());
    const [kuvaD, setKuvaD] = useState(tarkastaMuokkaaKuva());

    // Tämä funtio tallettaa tekstiä reduxiin sitä mukaan kun se muuttuu
    const tekstiMuuttunut = (e) => {
        dispatch(changeMarker(props.index, e.target.value));
    }

    // Funtio poistaa markkerin kokonaan reduxista
    const poistaMarkkeri = () => {
        dispatch(deleteMarker(props.index));
        props.sulje(null);
    }

    //Poistaa kuvan kokonaan markkerista ja disaploi poistakuva napin
    const poistaKuva = () => {
        setKuvaD(!kuvaD);
        dispatch(deleteImage(props.index));
    }

    //Funktio avaa poista kuva napin ja tallettaa annetun kuvan url:n reduxiin
    const onDrop = (kuva) => {
        setKuvaD(!kuvaD);
        let url = URL.createObjectURL(kuva[0]);

        dispatch(addImage(props.index, url))

    }


    return (
        <Container fluid className="p-0">
            <Form>
                <Form.Group >
                    <Form.Label>Teksti tallentuu ja poistuu sitä mukaan kun kirjoitat</Form.Label>
                    <Form.Control
                        disabled={muokkaa}
                        as="textarea" rows={3}
                        value={markers[props.index].data}
                        onChange={(e) => { tekstiMuuttunut(e) }} />
                </Form.Group>
                <Row>

                    {markers[props.index].kuva === null ? <ImageUploader
                        withIcon={false}
                        buttonText='Valiste kuva'
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    /> : <Image rounded style={kuvaKoko} src={markers[props.index].kuva} />}
                </Row>
                <Button
                    className="mr-1"
                    size="sm"
                    disabled={!muokkaa}
                    onClick={() => { setMuokkaa(!muokkaa) }}
                    variant="outline-primary">Muokkaa</Button>
                <Button
                    className="mr-1"
                    size="sm"
                    disabled={!kuvaD}
                    onClick={() => { poistaKuva() }}
                    variant="outline-danger">Poista kuva</Button>
                <Button
                    size="sm"
                    onClick={() => { poistaMarkkeri() }}
                    variant="outline-danger">Poista markkeri</Button>
            </Form>
        </Container>

    );
}

export default Info;