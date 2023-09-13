

import Tags from './Tags';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const Card = ({
  image = 'imagen-por-defecto.jpg',
  name = 'Nombre por defecto',
  description = 'Descripción por defecto',
  tagText = 'Tag por defecto',
  tagColor = 'secondary',
}) => (
  <div className="card" style={{ width: '200px', height: '420px' }}>
    
    <img src={image} alt={name} style={{ width: '200px', height: '300px' }} />
    <h2>{name}</h2>
    <p>{description}</p>
    
    <Tags text={tagText} color={tagColor} />
    
  </div>
);

export default Card;

