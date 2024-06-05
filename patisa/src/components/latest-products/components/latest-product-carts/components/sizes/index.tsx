type Props = {
  sizes: string[];
};

const Sizes = ({ sizes }: Props) => {
  return (
    <div className="flex flex-row-reverse justify-start items-end w-full gap-1 text-xs  text-garyCustom">
      {sizes.map((size) => (
        <span className="border p-1 shadow-sm">{size}</span>
      ))}
    </div>
  );
};

export default Sizes;
