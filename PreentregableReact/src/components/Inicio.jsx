import React from 'react';
const productos = [
  {id: 1, nombre: 'Producto X', precio: 1},
  {id: 2, nombre: 'Producto Y', precio: 2},
  {id: 3, nombre: 'Producto Z', precio: 3},
];

function Inicio() {
  return (
    <div>
      <h1 className="mb-4">Catálogo de productos</h1>
      <div className="row">
        {productos.map(producto => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;