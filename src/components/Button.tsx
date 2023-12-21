interface ButtonComponentProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonComponent = ({ children, onClick }: ButtonComponentProps) => {
  return (
    <button className="bg-red-900" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
