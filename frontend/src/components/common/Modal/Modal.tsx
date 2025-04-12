interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="w-[370px] h-full rounded-tl-4xl bg-white pt-8 px-5">
      {children}
    </div>
  );
};

export default Modal;
