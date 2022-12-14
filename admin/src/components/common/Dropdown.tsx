import { useState } from "react";

interface IList {
  name: string | number;
  value: string | number;
}

interface IProps {
  title?: string;
  list: Array<IList>;
  onItemClick: any;
  selectedItem?: string;
}

const Dropdown = (props: IProps) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  return (
    <div className="w-full relative">
      <h4 className="text-white mb-2">{props.title && props.title}</h4>
      <div
        className="w-full flex items-center justify-between p-2 bg-[#2b2b31] text-gray-400 cursor-pointer relative transition-all"
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        {props.selectedItem ? (
          <span className="capitalize">{props.selectedItem}</span>
        ) : (
          <span>Select Value</span>
        )}
        {isShowMenu ? (
          <i className="bx bxs-down-arrow"></i>
        ) : (
          <i className="bx bxs-up-arrow"></i>
        )}
      </div>
      {isShowMenu && (
        <ul className="menu absolute top-full w-full p-2 bg-[#2b2b31] z-50">
          {props.list.map((item, index) => (
            <li
              key={index}
              className="p-2 text-gray-400 cursor-pointer hover:text-green-500 transition-all"
              onClick={(e) => {
                props.onItemClick(e);
                setIsShowMenu(false);
              }}
              data-value={item.value}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
