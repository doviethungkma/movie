import React from "react";

interface IInputProps {
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInputProps) => {
  const { placeholder, value, name, label, onChange } = props;
  return (
    <div>
      {label && <h4 className="text-white mb-2">{label}:</h4>}
      <input
        type="text"
        name={name}
        value={value}
        className="w-full p-2 rounded-md border border-thin bg-background-color text-white"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
