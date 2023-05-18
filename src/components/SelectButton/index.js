const ButtonWrapper = ({ children, selected, onClick, ...rest }) => {
  const bgClassName = selected ? 'border-pink-300 bg-white': 'border-gray-100 bg-gray-100';

  return (
    <div className={`w-full`} onClick={onClick} {...rest}>
      <div className={"flex flex-col justify-around border p-2 rounded-lg transition-colors " + bgClassName}>
        {children}
      </div>
    </div>
  );
};

export default ButtonWrapper;
