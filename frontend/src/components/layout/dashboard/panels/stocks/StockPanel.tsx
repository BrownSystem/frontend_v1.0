import LayoutPanel from "../../LayoutPanel";
import { ActionCard } from "../../widgets";
import ProductTable from "./content/ProductTable";

const StockPanel = () => {
  return (
    <LayoutPanel>
      <div className="w-full flex h-full roundend-lg gap-5">
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </div>
      <div className="mt-5">
        <ProductTable />
      </div>
    </LayoutPanel>
  );
};

export default StockPanel;
