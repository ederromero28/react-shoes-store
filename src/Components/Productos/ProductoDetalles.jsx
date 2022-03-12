import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/Dataprovider";
import { useParams } from "react-router-dom";


export const ProductoDetalles = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const params = useParams();

  useEffect(() => {

    productos.forEach(producto => {
      console.log(producto.id, parseInt(params.id));
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto)
      };
    });
  }, [params.id, productos])


  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
            <p className="nuevo">Nuevo</p>
            <div className="tamano">
              <select placeholder="tamano">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
              </select>
              <p>Tamaño</p>
            </div>
          </div>
          <button onClick={() => addCarrito(detalle.id)}>Añadir al carrito</button>
          <img src={detalle.image} alt={detalle.title} />
          <div className="description">
            <p><b>Descripción: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum ipsum itaque soluta temporibus, unde nesciunt ullam placeat quia, blanditiis inventore tempore. Beatae perferendis quam fuga earum ex ipsum nesciunt. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati illum sed dicta voluptatibus fuga numquam officia exercitationem quos ea.</p>
          </div>
          <br /><br /><br /><br />
        </div>
      }
    </>
  )
}