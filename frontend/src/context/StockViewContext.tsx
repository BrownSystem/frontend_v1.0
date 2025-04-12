import React, { createContext, useContext, useState } from "react";
import ProductTable from "../components/dashboard/panels/stocks/content/ProductTable";
import DepositsContent from "../components/dashboard/panels/stocks/content/DepositsContent";
import SuppliersContent from "../components/dashboard/panels/stocks/content/SuppliersContent";
import SupplierTable from "../components/dashboard/panels/stocks/content/SupplierTable";

interface StockViewContextType {
  view: { name: string; props?: any };
  setView: React.Dispatch<React.SetStateAction<{ name: string; props?: any }>>;
}

const StockViewContext = createContext<StockViewContextType | null>(null);

interface IStockViewProviderProps {
  children: React.ReactNode;
}

export const StockViewProvider: React.FC<IStockViewProviderProps> = ({
  children,
}) => {
  const [view, setView] = useState({
    name: "products",
    props: null,
  });

  const renderContent = () => {
    switch (view.name) {
      case "productos":
        return (
          <ProductTable
            title={view.props?.title}
            span={view.props?.span}
            backTo={view.props?.backTo}
          />
        );
      case "depositos":
        return <DepositsContent />;
      case "proveedores":
        return <SuppliersContent />;
      case "supplier_table":
        return (
          <SupplierTable
            title="Registros"
            span="compras"
            backTo={view.props?.backTo}
          />
        );
      default:
        return (
          <ProductTable
            title={"Productos"}
            span={"proximo a agotar"}
            backTo={view.props?.backTo}
          />
        );
    }
  };

  return (
    <StockViewContext.Provider value={{ view, setView, renderContent }}>
      {children}
    </StockViewContext.Provider>
  );
};

export const useStockView = () => useContext(StockViewContext);
