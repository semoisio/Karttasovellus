import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Tab, Tabs } from 'react-bootstrap';
import Navbar from './components/Navbar'
import MyMapComponent from './components/GoogleMap'
import React, {useState} from 'react';
import MerkkijonoLista from './components/MerkkijonoLista'


// Ensimmäinen sivu
function App() {

  const [key, setKey] = useState('Kartta');

  return (
    <Container fluid className="App" className="p-0">
      <Navbar />
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} transition={false}>
        <Tab eventKey="Kartta" title="Kartta">
          <MyMapComponent />
        </Tab>
        <Tab eventKey="Merkkijonot" title="Merkkijonot">
           <MerkkijonoLista/>
        </Tab>
      </Tabs>

    </Container>
  );
}

export default App;
