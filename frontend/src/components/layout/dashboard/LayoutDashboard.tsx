import { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { StockPanel } from "./panels";

const LayoutPanel = () => {
  const [section, setSection] = useState<string>("stock");

  const renderPaner = () => {
    switch (section) {
      case "stock":
        return <StockPanel />;
      case "ventas":
        return <div>Panel Ventas</div>;
      default:
        return <div>Panel Stock</div>;
    }
  };

  return (
    <div
      className="w-screen h-screen grid"
      style={{ gridTemplateColumns: "75% 25%" }}
    >
      <div className="w-full h-full flex flex-col">
        <TopBar />
        <div className="h-full flex">
          <Sidebar setSection={setSection} />
          {renderPaner()}
        </div>
      </div>
    </div>
  );
};

export default LayoutPanel;
