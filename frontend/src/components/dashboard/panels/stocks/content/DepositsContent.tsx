import { useState } from "react";
import { DepositCard } from "../../../widgets";
import { useStockView } from "../../../../../context/StockViewContext";

const DepositsContent = () => {
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const { setView, renderContent } = useStockView();

  const handleCardClick = (deposit) => {
    setSelectedDeposit(deposit);
    setView({
      name: "productos",
      props: {
        title: deposit.name,
        span: deposit.location,
        backTo: true,
      },
    });
  };

  if (selectedDeposit) {
    return renderContent();
  }

  return (
    <>
      <h1 className="!text-3xl font-normal text-gray-700">
        Depositos{" "}
        <span className="text-gray-500 text-[20px]">
          (selecciona para inspeccionar)
        </span>
      </h1>

      <div className="w-full flex mt-5 gap-4">
        {[
          {
            name: "Hyper",
            location: "Córdoba",
            stockTotal: 1432,
            stockCritical: 8,
            wasRecentlyRestocked: true,
          },
          {
            name: "Castro barros",
            location: "Córdoba",
            stockTotal: 1245,
            stockCritical: 4,
            wasRecentlyRestocked: false,
          },
          {
            name: "Jesús María",
            location: "Córdoba",
            stockTotal: 2992,
            stockCritical: 7,
            wasRecentlyRestocked: true,
          },
        ].map((deposit) => (
          <DepositCard
            key={deposit.name}
            {...deposit}
            onClick={() => handleCardClick(deposit)}
          />
        ))}
      </div>
    </>
  );
};

export default DepositsContent;
