const WaterProofBtn = ({ text, children }) => (
  <div className={'w-full mx-1 h-14 text-center flex flex-col text-sm items-center justify-center'}>
    <p>{text}</p>
    {children}
  </div>
);

export default WaterProofBtn;
