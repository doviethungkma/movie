interface IProps {
  name: string;
  list: Array<string> | undefined;
}

const ListTag = (props: IProps) => {
  return (
    <div>
      <h4 className="text-white">{props.name}</h4>
      {props.list && props.list.length > 0 ? (
        <div className="p-2 bg-[#2b2b31] rounded-xl flex flex-wrap gap-2">
          {props.list.map((item, index) => (
            <span
              key={index}
              className="w-auto bg-gray-600 py-1 px-2 text-xs text-white rounded-xl"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div className="py-2 px-4 bg-[#2b2b31] rounded-md text-gray-400">
          None
        </div>
      )}
    </div>
  );
};

export default ListTag;
