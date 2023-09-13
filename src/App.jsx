// src/App.js

import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const App = () => (
  <div className="app">
    <Header title="Adopta un perrito" />
    <div className="card-container">
      <Card
        image="https://images.unsplash.com/photo-1598875706250-21faaf804361?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="Bartolo"
        description="Perrito muy alegre espercial para alegrar tu vida"
        tagText="Adoptar"
        tagColor="primary"
        
      />
      <Card
        image="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg"
        name="messi"
        description="Perrito Jugueton para tus Hijos, no te arrepentiras "
        tagText="Adoptar"
        tagColor="success"
      />
      <Card
        image="https://images.unsplash.com/photo-1616781296073-65d3f087de41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="Gohan"
        description="Perritos especil para la compañia del adulto"
        tagText="Adoptar"
        tagColor="warning"
      />
      <Card
        image="https://images.unsplash.com/photo-1572566830488-069bcc7fbcec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        name="Princesa"
        description="perrito para la caceria, te ayudara"
        tagText="Adoptar"
        tagColor="danger"
      />
      
      {/* Agregar más tarjetas de perros aquí */}
    </div>
    <Footer />
  </div>
);

export default App;


