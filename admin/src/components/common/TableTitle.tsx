import React from "react";

interface IProps {
  listTitle: string[];
}

const TableTitle = (props: IProps) => {
  return (
    <>
      {props.listTitle.map((item, index) => (
        <th
          className="text-xs text-left text-gray-500 uppercase font-normal px-2 py-4 "
          key={index}
        >
          {item}
        </th>
      ))}
    </>
  );
};

export default TableTitle;
