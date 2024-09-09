import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/App.css';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const mockItems = [
        { id: '1', name: 'Producto 1', description: 'Luce con estilo y comodidad con nuestras Chamarras de Estilo Musical, diseñadas para aquellos que viven y respiran música. Hechas con materiales de alta calidad, estas chamarras ofrecen una combinación perfecta de moda y funcionalidad, ideales para cualquier ocasión, ya sea un concierto, una salida casual o simplemente para mostrar tu amor por la música.' },
        { id: '2', name: 'Producto 2', description: 'Descubre la excelencia musical con las Guitarras Gibson, un ícono en el mundo de la música desde 1902. Reconocidas por su calidad superior y su sonido distintivo, las guitarras Gibson son la elección preferida de músicos de todos los géneros, desde el rock hasta el jazz. Cada guitarra está diseñada con precisión, utilizando materiales de primera calidad como caoba y arce, que contribuyen a su resonancia y tonalidad únicas' },
        { id: '3', name: 'Producto 3', description: '¡No te pierdas la oportunidad de vivir la música en vivo! Nuestras Entradas a Conciertos te brindan acceso a experiencias inolvidables, donde la energía del público y la pasión de los artistas se combinan para crear momentos mágicos. Desde los grandes festivales hasta conciertos íntimos, tenemos boletos para una amplia variedad de géneros, incluyendo rock, jazz, y más.' }
      ];
      const foundItem = mockItems.find(product => product.id === itemId);
      setItem(foundItem);
    };
    
    fetchItem();
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;


