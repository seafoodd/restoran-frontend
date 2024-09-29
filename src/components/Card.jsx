const Card = ({ className, title1, title2, description }) => {
  return (
    <div
      className={
        "flex flex-col bg-white shadow-xl w-96 h-96 mt-[-80px] justify-center text-center items-center px-12 py-6 text-2xl font-tinos " +
        className
      }
    >
      <img src="src/assets/card.png" alt="" className="w-[87px] h-[87px]" />
      <div className="flex gap-2">
        {title1}
        <div className="text-color-3">{title2}</div>
      </div>
      <div className="text-gray-600 pt-4">{description}</div>
    </div>
  );
};

export default Card;
