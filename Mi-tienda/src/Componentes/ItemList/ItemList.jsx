
// import Item from '../Item/Item';  
// import PropTypes from 'prop-types';

// const ItemList = ({ items }) => {
//   return (
//     <div className="item-list">
//       {items.map(item => (
//         <Item key={item.id} item={item} />
//       ))}
//     </div>
//   );
// };

// export default ItemList;
import PropTypes from 'prop-types';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

// Definir las PropTypes
ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Puedes agregar más validaciones para las propiedades de cada item aquí
    })
  ).isRequired,
};

export default ItemList;