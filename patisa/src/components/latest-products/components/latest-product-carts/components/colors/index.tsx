type Props = {
  itemColors: string[];
};

const Colors = ({ itemColors }: Props) => {
  return (
    <>
      <div className="bg-white absolute px-1 flex flex-col rounded-bl-md justify-center items-center z-20 gap-1 py-3">
        {itemColors.map((color) => (
          <div
            style={{ backgroundColor: color }}
            className={`w-4 h-4 rounded-full`}
          />
        ))}
      </div>
    </>
  );
};

export default Colors;
