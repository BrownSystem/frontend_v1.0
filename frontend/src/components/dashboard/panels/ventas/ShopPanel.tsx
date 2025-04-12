import LayoutPanel from "../../layout/LayoutPanel";
import { ActionCard } from "../../widgets";
import {
  Pedidos,
  CreateUser,
  Comporbantes,
  Lock,
} from "../../../../assets/icons";
import { useStockView } from "../../../../context/StockViewContext";

const ShopPanel = () => {
  const { setView, renderContent } = useStockView();

  return (
    <LayoutPanel>
      <div className="w-full flex max-h-full roundend-lg">
        <div className="w-full flex h-[120px] gap-5">
          <ActionCard
            svgAction={<CreateUser />}
            action={"Añadir"}
            onClick={() =>
              setView({
                name: "productos",
                props: { title: "Productos", span: "proximo a agotar" },
              })
            }
            title={"Añadir cliente"}
            others={false}
            hasNotifications={false}
          />
          <ActionCard
            svgAction={<Comporbantes />}
            action={"Generar"}
            onClick={() => setView({ name: "depositos" })}
            title={"Comprobantes"}
            others={false}
            hasNotifications={false}
          />
          <ActionCard
            onClick={() => setView({ name: "proveedores" })}
            svgAction={<Lock />}
            action={"Cerrar"}
            title={"Cierre de caja"}
            others={false}
            hasNotifications={false}
          />
          <ActionCard
            onClick={() => setView({ name: "pedidos" })}
            svgAction={<Pedidos />}
            action={"Visualizar"}
            title={"Pedidos"}
            others={false}
            hasNotifications={true}
          />
        </div>
      </div>
      <div className="mt-5">{renderContent()}</div>
    </LayoutPanel>
  );
};

export default ShopPanel;
