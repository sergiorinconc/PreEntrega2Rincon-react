
// import { Link } from 'react-router-dom';

// const Item = ({ item }) => {
//   return (
//     <div className="item-card">
//       <h2>{item.name}</h2>
//       <p>{item.description}</p>
//       <Link to={`/item/${item.id}`}>Ver Detalle</Link> 
//     </div>
//   );
// };

// export default Item;

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  return (
    <div className="item-card">
      {/* Mostrar la imagen del producto */}
      <img src={item.image} alt={item.name} className="item-image" />
      
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
};

// Definir las PropTypes
Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,  // PropType para la imagen
  }).isRequired,
};

export default Item;
