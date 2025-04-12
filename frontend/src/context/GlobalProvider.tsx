import React from "react";
import { ProductModalProvider } from "./ProductModalContext";
import { StockViewProvider } from "./StockViewContext";

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  return (
    <StockViewProvider>
      <ProductModalProvider>{children}</ProductModalProvider>
    </StockViewProvider>
  );
};
