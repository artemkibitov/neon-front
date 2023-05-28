const ButtonWrapper = ({ children, selected, onClick, ...rest }) => {
  const bgClassName = selected ? 'border-emerald-500 bg-white text-slate-800': 'border-stone-50 text-stone-50 bg-slate-800';

  return (
    <div className={`w-full`} onClick={onClick} {...rest}>
      <div className={"flex flex-col justify-around border p-2 rounded-lg transition-colors " + bgClassName}>
        {children}
      </div>
    </div>
  );
};

export default ButtonWrapper;
