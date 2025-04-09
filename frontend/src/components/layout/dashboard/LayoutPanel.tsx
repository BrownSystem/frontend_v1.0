import React from "react";

interface LayoutPanelProps {
  children: React.ReactNode;
}

const LayoutPanel: React.FC<LayoutPanelProps> = ({ children }) => {
  return (
    <div className="w-full max-h-full flex flex-col px-5 mt-8">{children}</div>
  );
};

export default LayoutPanel;
