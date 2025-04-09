import React from "react";
import { EditIcon, StockIcon } from "../../../../../../assets/icons/Icon";

const products = [
  {
    code: "PD12949UXLM",
    price: 292.932,
    priceGene: 300.311,
    stock: 5,
    description: "Mesa de Roble Macizo",
  },
  {
    code: "FS12945UFLM",
    price: 292.932,
    priceGene: 300.311,
    stock: 1,
    description: "Silla Tapizada de Cuero",
  },
  {
    code: "TT32945TMLM",
    price: 450.0,
    priceGene: 475.5,
    stock: 12,
    description: "Sofá Esquinero de Lino",
  },
  {
    code: "LK52948UJLM",
    price: 199.99,
    priceGene: 210.0,
    stock: 8,
    description: "Lámpara de Pie Minimalista",
  },
];

const ProductTable = () => {
  return (
    <>
      <h1 className="!text-3xl font-normal text-gray-700">Productos</h1>

      <table className="w-full text-gray-700 border-separate border-spacing-y-4">
        <thead className="text-gray-800 rounded-lg">
          <tr>
            <th className="p-3 text-left font-normal">Código</th>
            <th className="p-3 text-left font-normal">Descripción</th>
            <th className="p-3 text-left font-normal">Stock</th>
            <th className="p-3 text-left font-normal">Precio Unitario</th>
            <th className="p-3 text-left font-normal">Precio General</th>
            <th className="p-3 text-left font-normal">Acciones</th>
          </tr>
        </thead>

        <tbody className="w-full max-h-auto overflow">
          {products.map((product) => (
            <tr
              key={product.code}
              className="cursor-pointer bg-white shadow-md rounded-lg hover:bg-pink-50 transition"
            >
              <td className="p-3 rounded-l-lg border-l-4 border-[var(--brown-ligth-400)]">
                {product.code}
              </td>
              <td className="p-3">{product.description}</td>
              <td className="p-3 flex justify-center items-center gap-2">
                {product.stock}
                {product.stock < 2 ? (
                  <StockIcon type="low" />
                ) : (
                  <StockIcon type="ok" />
                )}
              </td>
              <td className="p-3">${product.price}</td>
              <td className="p-3">${product.priceGene}</td>
              <td className="p-3 rounded-r-lg">
                <a href="#">
                  <EditIcon />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
