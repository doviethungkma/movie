import React from "react";

interface IProps {
  name: string;
  placeholder?: string;
  value?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  onChange?: any;
}

const Input = (props: IProps) => {
  return (
    <div className="w-full">
      <h4 className="text-white mb-2 capitalize">{props.name}</h4>
      <input
        type="text"
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        className={`${props.width ? props.width : "w-full"} ${
          props.height ? props.height : "h-auto"
        } p-2 bg-[#2b2b31] text-gray-300 border-0 outline-none rounded-sm`}
      />
    </div>
  );
};

export default Input;